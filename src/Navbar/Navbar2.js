import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverText from '../components/common/Tooltip';
import WeatherText from '../components/common/Tooltip2';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar2() {
    const [auth] = useContext(AuthContext);
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <Fragment>
            <nav>
                <div>
                    <h1 className='logo'>
                        Hooked
                        <FontAwesomeIcon icon={["fas", "anchor"]} />
                    </h1>
                    {(toggleMenu || screenWidth > 900) && (
                        <ul className='list'>
                            <li className='items'><HoverText /></li>
                            <li className='items'><WeatherText /></li>
                            <li className='items'><NavButton to='/fiveDayForecast' label='7 Day Forecast' /></li>
                            {auth.token ?
                                <Fragment>
                                    <li className='items'><NavButton to="/search" label="Search" /></li>
                                    <li className='items'><NavButton to="/profilePage" label="View Profile" /></li>
                                    <li className='items'><NavButton to="/logout" label="Sign Out" /></li>
                                    <Link to="/profilePage">
                                        <h1>{auth.name}</h1>
                                    </Link>
                                </Fragment>
                                :
                                <Fragment>
                                    <li className='items'><NavButton to="/login" label="Sign In" /></li>
                                </Fragment>
                            }
                        </ul>
                    )}
                </div>
                <button onClick={toggleNav} className='btn'><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </nav>
            <div style={{ height: "75px" }} />
        </Fragment>
    )
}