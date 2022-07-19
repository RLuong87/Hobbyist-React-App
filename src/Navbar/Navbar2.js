import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from 'react-tooltip';
import HoverText from '../components/common/Tooltip';
import WeatherText from '../components/common/Tooltip2';
import UsersText from '../components/common/ToolTip3';
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
                    {(toggleMenu || screenWidth > 500) && (
                        <ul className='list'>
                            <li className='items'><HoverText /></li>
                            <li className='items'><WeatherText /></li>
                            {auth.token ?
                                <Fragment>
                                    <li className='items'><UsersText /></li>
                                    <li className='items'><NavButton to="/search" label="Search" /></li>
                                    <li className='items'><NavButton to="/profilePage" label="View Profile" /></li>
                                    <li className='items'><NavButton to="/logout" label="Logout" /></li>
                                    <li className='items' style={{ background: "transparent", border: "none" }}>
                                        <Link to="/profilePage">
                                            <p className='nav-name'>{auth.name}</p>
                                        </Link>
                                    </li>
                                </Fragment>
                                :
                                <Fragment>
                                    <li className='items'><NavButton to="/login" label="Login" /></li>
                                    <li className='items'><NavButton to="/example" label="Example" /></li>
                                </Fragment>
                            }
                        </ul>
                    )}
                </div>
                <button onClick={toggleNav} className='btn'>Menu</button>
            </nav>
            <div style={{ height: "75px" }} />
        </Fragment>
    )
}