import React from "react";

import Logo from "../../components/logo";
import Navi from "../../components/navigation";
import SubNavi from "./components/sub-navigation";


function CreateTeam() {

    return (
        <div id='box'>
            <Logo />
            <Navi />
            <SubNavi />
            <div id='main'>
                
            </div>
        </div>
    );
    
}


export default CreateTeam;