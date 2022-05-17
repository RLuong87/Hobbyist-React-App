import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FaLink from '../components/faCommon/FaLink';
import HoverText from '../components/common/Tooltip';
import WeatherText from '../components/common/Tooltip2';
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
        <nav>
            <div>
                <h1 className='logo'>
                    Hooked
                    <FontAwesomeIcon icon={["fas", "anchor"]} />
                </h1>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className='list'>
                        <HoverText />
                        <WeatherText />
                        {/* <FontAwesomeIcon icon={["fas", "home"]} /> */}
                        {/* <NavButton to="/" label="Home" /> */}
                        {/* <FontAwesomeIcon icon={["fas", "cloud-sun"]} /> */}
                        {/* <NavButton to="/weather" label="Weather" /> */}
                        {auth.token ?
                            <Fragment>
                                <NavButton to="/users" label="Users" />
                                <NavButton to="/profilecard" label="View Profile" />
                                <NavButton to="/logout" label="Logout" />
                                <p className='nav-name'>Hi {auth.name}</p>
                            </Fragment>
                            :
                            <Fragment>
                                {/* <FontAwesomeIcon icon={["fas", "otter"]} /> */}
                                <NavButton to="/login" label="Login" />
                            </Fragment>
                        }
                    </ul>
                )}
            </div>
            <button onClick={toggleNav} className='btn'>Menu</button>
        </nav>
    )
}