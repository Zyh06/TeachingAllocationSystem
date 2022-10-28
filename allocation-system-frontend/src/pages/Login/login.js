import React, {useState } from "react";

import Logo from "../../components/logo";
import Navi from "../../components/navigation";
import "./login.css"

function Login() {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = function() {

        localStorage.setItem("token", "my token *************");
    }

    return (
        <div id='box'>
            <Logo />
            <Navi />
            <div id='main'>
                <form class="box" method="POST">
                    <h1>Login</h1>
                    <p style={{ margin: "2% 0 0 0" }}>Account:</p>
                    <input type='email' class="form-control" value={account} id='account' placeholder="Username"
                        onChange={(event) => {
                            setAccount(event.target.value);
                        }}
                    />
                    <p style={{ margin: "2% 0 0 0" }}>Password:</p>
                    <input type='password' class="form-control" value={password} id='password' placeholder="Password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <div style={{ margin: "2%" }} >
                        <button class="btn btn-primary" type="submit"
                            onClick={
                                () => {
                                    login();
                                }
                            }
                        > Login </button>

                    </div>
                </form>
            </div>

        </div>

    );
}

export default Login;