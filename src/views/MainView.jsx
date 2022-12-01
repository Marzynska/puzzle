import React from 'react';
import MainField from "../components/MainField.jsx";
import SideBar from "../components/SideBar.jsx";

function MainView() {
    return (
        <div className="container">
            <MainField />
            <SideBar />
        </div>
    );
}

export default MainView;