import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"

export default function Navi() {
    const token = localStorage.getItem("token");
    //const [loginState, setLoginState] = useState(token ? true : false);

    return (

        <div id='nav'>
            <ul>
                <li>
                    <NavLink to="/">
                        <i class="bi bi-house-fill btn-lg"></i>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Login">
                        <i class="bi bi-person-fill btn-lg"></i>
                        Login
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/ProjectList">
                        <i class="bi bi-collection-fill btn-lg"></i>
                        Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/TeamList">
                        <i class="bi bi-person-rolodex btn-lg"></i>
                        Teams
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/AllocateProject">
                        <i class="bi bi-clipboard2-fill btn-lg"></i>
                        Allocate
                    </NavLink>
                </li>
            </ul>
        </div>

    );
}