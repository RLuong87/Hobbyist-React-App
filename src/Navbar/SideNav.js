import React from "react";

const SideNav = (props) => {
    return (
        <div className="sidenav">
            <div style={{ width: "25%", paddingTop: "20px" }}>
                <a href="#section">About</a>
                <a href="#section">Services</a>
                <a href="#section">Clients</a>
                <a href="#section">Contact</a>
            </div>
        </div >
    )
}

export default SideNav;