import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                        <NavButton to="/" label="Home" />
                        <NavButton to="/weather" label="Weather" />
                        {auth.token ?
                            <Fragment>
                                <NavButton to="/users" label="Users" />
                                <NavButton to="/createProfile" label="Create Profile" />
                                <NavButton to="/profilecard" label="View Profile" />
                                <NavButton to="/logout" label="Logout" />
                            </Fragment>
                            :
                            <Fragment>
                                <NavButton to="/login" label="Login" />
                                <NavButton to="/signup" label="Register" />
                            </Fragment>
                        }
                    </ul>
                )}
            </div>
            <button onClick={toggleNav} className='btn'>Menu</button>
        </nav>
    )
}