import React, { Fragment, useContext } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../components/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {

    const [auth] = useContext(AuthContext);

    return (
        <Fragment>
            <div style={{
                backgroundColor: "#00bbff",
                position: "absolute",
                width: "100%",
                zIndex: 9999, // making sure the navbar is always at the top of the screen
                top: 0,
                left: 0,
                height: "75px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <h1 style={{
                    fontFamily: "fantasy",
                    fontWeight: 100,
                    fontSize: "2.5em",
                    margin: "0 20px",
                }}>Hooked</h1>
                <div style={{
                    margin: "0 20px",
                    flexDirection: "row",
                    background: "transparent",
                    userSelect: "none",
                    textAlign: "right",
                }}>
                    <FontAwesomeIcon icon={["fas", "home"]} />
                    <NavButton to="/" label="Home" />
                    <FontAwesomeIcon icon={["fas", "cloud-sun"]} />
                    <NavButton to="/weather" label="Weather" />
                    {auth.token ?
                        <Fragment>
                            <FontAwesomeIcon icon={["fas", "users"]} />
                            <NavButton to="/users" label="Users" />
                            <FontAwesomeIcon icon={["fas", "address-card"]} />
                            <NavButton to="/createProfile" label="Create Profile" />
                            <FontAwesomeIcon icon={["fas", "user"]} />
                            <NavButton to="/profilecard" label="View Profile" />
                            <NavButton to="/logout" label="Logout" />
                        </Fragment>
                        :
                        <Fragment>
                            <NavButton to="/login" label="Login" />
                            <FontAwesomeIcon icon={["fas", "otter"]} />
                            <NavButton to="/signup" label="Register" />
                            <FontAwesomeIcon icon={["fas", "user-plus"]} />
                        </Fragment>
                    }
                </div>
            </div>
            <div style={{ height: "75px" }} />
        </Fragment>
    )
}

export default Navbar;