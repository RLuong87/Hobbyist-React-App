import React, { useState, useEffect, useContext, Fragment } from 'react'
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverText from '../components/common/Tooltip';
import WeatherText from '../components/common/Tooltip2';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { Button, InputLabel, MenuItem, MenuList, Select } from '@mui/material';
import Grid from '@mui/material/Grid';

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
                    <Grid container>
                        <div style={{cursor: "pointer"}} onClick={() => {navigate("/")}}>
                            <h1 className='nav-name'>Hooked</h1>
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={["fas", "anchor"]} />
                        </div>
                        {auth.token ?
                            <Link to="/profilePage">
                                <div className='image-container5'>
                                    <img src={auth.avatar} />
                                </div>
                            </Link>
                            :
                            auth.token
                        }
                    </Grid>
                    {(toggleMenu || screenWidth > 900) && (
                        <ul className='list'>
                            <div className='border-style'>
                                <li className='items'><HoverText /></li>
                            </div>
                            <div className='border-style'>
                                <li className='items'><WeatherText /></li>
                            </div>
                            {auth.token ?
                                <Fragment>
                                    <Select>
                                        <h2 onClick={() => navigate("/profilePage")} style={{ color: "coral", textAlign: "center", cursor: "pointer" }}>{auth.name}</h2>
                                        <MenuItem>
                                            <Button onClick={() => { navigate("/search") }}>
                                                <h2 style={{
                                                    color: "black",
                                                    fontFamily: "inherit",
                                                }}>
                                                    Search
                                                </h2>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button onClick={() => { navigate("/forecast") }}>
                                                <h2 style={{
                                                    color: "black",
                                                    fontFamily: "inherit"
                                                }}>
                                                    Forecast
                                                </h2>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button onClick={() => { navigate("/logout") }}>
                                                <h2 style={{
                                                    color: "black",
                                                    fontFamily: "inherit"
                                                }}>
                                                    Sign out
                                                </h2>
                                            </Button>
                                        </MenuItem>
                                    </Select>
                                </Fragment>
                                :
                                <Fragment>
                                    <div className='border-style'>
                                        <li className='items'><NavButton to="/login" label="Sign In" /></li>
                                    </div>
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