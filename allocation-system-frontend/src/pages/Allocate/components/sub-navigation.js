import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"

export default function SubNavi() {
    //const token = localStorage.getItem("token");
    //const [loginState, setLoginState] = useState(token ? true : false);

    return (
        <div id='sub_nav'>
            <ul>
                <li>
                    <NavLink to="/AllocateProject"> Allocate Project to Team </NavLink>
                </li>
                <li>
                    <NavLink to="/AllocateTeam"> Allocate Team to Project </NavLink>
                </li>
            </ul>
        </div>
    )
}