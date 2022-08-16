import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverText from '../components/common/Tooltip';
import WeatherText from '../components/common/Tooltip2';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { Button, MenuItem, MenuList, Select } from '@mui/material';
import BorderCard from '../components/common/BorderCard';
import { BorderStyle } from '@mui/icons-material';

export default function Navbar2() {
    const [auth] = useContext(AuthContext);
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    let navigate = useNavigate();

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
                            {auth.token ?
                                <Fragment>
                                    <Select>
                                        <h1 style={{
                                            color: "coral",
                                            textAlign: "center"
                                        }}>
                                            {auth.name}
                                            <Link to="/profilePage">
                                                <div className='image-container5'>
                                                    <img src={auth.avatar} />
                                                </div>
                                            </Link>
                                        </h1>
                                        <MenuItem>
                                            <Button onClick={() => { navigate("/forecast") }}>
                                                <h2 style={{
                                                    color: "black",
                                                    fontFamily: "monospace"
                                                }}>
                                                    Forecast
                                                </h2>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button onClick={() => { navigate("/search") }}>
                                                <h2 style={{
                                                    color: "black",
                                                    fontFamily: "monospace"
                                                }}>
                                                    Search
                                                </h2>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button onClick={() => { navigate("/logout") }}>
                                                <h2 style={{
                                                    color: "black",
                                                    fontFamily: "monospace"
                                                }}>
                                                    Sign out
                                                </h2>
                                            </Button>
                                        </MenuItem>
                                    </Select>
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