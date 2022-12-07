import React from 'react';
import {NavLink} from "react-router-dom";
import { Button } from 'primereact/button';

function Header() {
    return (
        <header>
            <h1 className="title">Marine PUZZLE</h1>
            <nav className="nav">
                        <NavLink reloadDocument to='/'><Button label="New game" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></NavLink>
                        <NavLink to='/how-to-play'><Button label="How to play" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></NavLink>
                        <NavLink to='/bestScore'><Button label="Best score" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></NavLink>
                        <NavLink to='/hire'><Button label="Hire me" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></NavLink>
            </nav>
        </header>
    );
}

export default Header;