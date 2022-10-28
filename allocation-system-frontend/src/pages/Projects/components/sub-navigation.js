import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"

export default function SubNavi() {
    const token = localStorage.getItem("token");
    //const [loginState, setLoginState] = useState(token ? true : false);

    return (
        <div id='sub_nav'>
            <ul>
                <li>
                    <NavLink to="/ProjectList"> Project List </NavLink>
                </li>
                <li>
                    <NavLink to="/CreateProject"> Create Project </NavLink>
                </li>
            </ul>
        </div>
    )
}