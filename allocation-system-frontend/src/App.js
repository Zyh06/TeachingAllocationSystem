import { Route, Routes } from "react-router-dom";
import React from "react";

// home
import Home from "./pages/Home/homepage";
// login
import Login from "./pages/Login/login";
// projects
import CreateProject from "./pages/Projects/create-project";
import ProjectCreateChoice from "./pages/Projects/creation-choice";
import ProjectList from "./pages/Projects/project-list";
import UploadProjectFile from "./pages/Projects/upload-project-file";
// teams
import CreateTeam from "./pages/Teams/create-team";
import TeamCreateChoice from "./pages/Teams/creation-choice";
import TeamList from "./pages/Teams/team-list";
import UploadTeamFile from "./pages/Teams/upload-team-file";
// allocate
import AllocateProject from "./pages/Allocate/allocate-project";
import AllocateTeam from "./pages/Allocate/allocate-team";


function App() {
    return (
        <div className="App">
            <Routes>

                <Route path="/" element={<Home />} />
                
                <Route path="Login" element={<Login />} />
                
                <Route path="CreateProject" element={<CreateProject />} />
                <Route path="ProjectCreateChoice" element={<ProjectCreateChoice />} />
                <Route path="ProjectList" element={<ProjectList />} />
                <Route path="UploadProjectFile" element={<UploadProjectFile />} />

                <Route path="CreateTeam" element={<CreateTeam />} />
                <Route path="TeamCreateChoice" element={<TeamCreateChoice />} />
                <Route path="TeamList" element={<TeamList />} />
                <Route path="UploadTeamFile" element={<UploadTeamFile />} />

                <Route path="AllocateProject" element={<AllocateProject />} />
                <Route path="AllocateTeam" element={<AllocateTeam />} />

            </Routes>
        </div>
    )
}

export default App;