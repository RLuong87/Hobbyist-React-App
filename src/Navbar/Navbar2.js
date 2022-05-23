import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverText from '../components/common/Tooltip';
import WeatherText from '../components/common/Tooltip2';
import UsersText from '../components/common/ToolTip3';
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
                                    <li className='items'><NavButton to="/profilepage" label="View Profile" /></li>
                                    <li className='items'><NavButton to="/logout" label="Logout" /></li>
                                    <p className='nav-name'>Hi {auth.name}</p>
                                </Fragment>
                                :
                                <Fragment>
                                    <li className='items'><NavButton to="/login" label="Login" /></li>
                                </Fragment>
                            }
                        </ul>
                    )}
                </div>
                <button onClick={toggleNav} className='btn'>Menu</button>
            </nav>
            <div style={{ height: "75px" }} /> {/*very important to have */}
        </Fragment>
    )
}