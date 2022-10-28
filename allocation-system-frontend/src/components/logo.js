import React, { useState } from "react";
import "./components.css";

export default function Logo() {
    const token = localStorage.getItem("token");
    //const [loginState, setLoginState] = useState(token ? true : false);

    return (
        <div id='logo'>
            <span style={{ 'font-size': '25px' }}>Project Allocating System</span>
            <span style={{ 'float': 'right', 'font-size': '25px' }}>Hello, Mike!</span>
        </div>
    )
}