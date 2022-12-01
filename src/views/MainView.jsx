import React from 'react';
import MainField from "../components/MainField.jsx";
import SideBar from "../components/SideBar.jsx";

function MainView(props) {
    return (
        <div className="container">
            <MainField />
            <SideBar />
            {/*<div style={{height: 100}}>Widok główny aplikacji. Podaj imię, wybierz trudność i obrazek</div>*/}
        </div>
    );
}

export default MainView;