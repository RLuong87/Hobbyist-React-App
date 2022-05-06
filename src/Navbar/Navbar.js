import React, { Fragment } from "react";
import NavButton from "./NavButton";

const Navbar = (props) => {
    return (
        <Fragment>
            <div style={{
                backgroundColor: "#F1F1F1",
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
                    <NavButton to="/" label="Home " />
                    <NavButton to="/profile" label="Create Profile" />
                    <NavButton to="/profilepage" label="Your Profile" />
                    <NavButton to="/weather" label="Weather" />
                    <NavButton to="/login" label="Login" />
                    <NavButton to="/signup" label="Sign up" />
                </div>
            </div>
            <div style={{ height: "75px" }} />
        </Fragment>
    )
}

export default Navbar;