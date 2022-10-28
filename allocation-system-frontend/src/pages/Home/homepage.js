import React from "react";
import { Button } from "reactstrap";

import Logo from "../../components/logo";
import Navi from "../../components/navigation";
import "./home.css"


function Home() {

    return (
        <div id='box'>
            <Logo />
            <Navi />
            <div id='main'>
                <form class="box">
                    <h1 id='title'>Welcome!</h1>
                    <div style={{"display": "inline-block"}}>
                        <Button color="success" id="guidebtn">
                            <i class="bi bi-collection-fill btn-lg" style={{ 'margin': '-10px' }}></i>
                            Project
                        </Button>
                        <Button color="danger" id="guidebtn">
                            <i class="bi bi-person-rolodex btn-lg" style={{ 'margin': '-10px' }}></i>
                            Team
                        </Button>
                        <Button color="warning" id="guidebtn">
                            <i class="bi bi-clipboard2-fill btn-lg" style={{ 'margin': '-10px' }}></i>
                            Allocate
                        </Button>

                    </div>
                </form>

            </div>

        </div>

    );
}


export default Home;