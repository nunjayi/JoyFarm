import React from "react";
import './header.css'

function Header(){
    return(
        <div id='header'>
            <div id="logo">
                <img src='/src/assets/joyfarmlogo3.png' alt="logo" />
            </div>
            <div id="navbar">
                <div id="nav">
                    <h2>Home</h2>
                </div>
                <div id="nav"><h2>12th Sep</h2></div>
                <div id="nav">Profile</div>
            </div>
        </div>
    )
}

export default Header