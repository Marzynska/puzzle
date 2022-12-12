import React from 'react';
import {Button} from "primereact/button";
import {NavLink} from "react-router-dom";

function Win({timer}) {
    return (
        <div className="win">
            <h2>CONGRATULATIONS</h2>
            <img src="../src/assets/img/congrat.png" alt="congratulations" width="400" height="251" />
            <p>Your time is: {timer} seconds</p>
            <nav>
                <NavLink reloadDocument to='/'><Button label="New game" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></NavLink>
                <NavLink to='/bestScore'><Button label="Best score" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></NavLink>
            </nav>
        </div>
    );
}

export default Win;