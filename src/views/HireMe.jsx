import React from 'react';
import {Button} from "primereact/button";

function HireMe() {
    return (
        <div className="textArea hireMe"><h2>Hello, World!</h2>
            <p>My name is Karolina. I am an archeologist, who have fallen in love with front-end technologies. I prepared this game as a final project of Java-Script Developer bootcamp. Now I am looking for my fist job in IT. If you enjoyed the game, visit my LinkedIn profile and hire me! :) Not hiring? Let your friends enjoy the game - share the link with others to help me find a job from my dreams :)</p>
            <a href="https://www.linkedin.com/in/karolina-marzynska/" target="_blank"><Button label="CLICK!" className="p-button-raised p-button-secondary p-button-text p-button-sm"/></a>
        </div>
    );
}

export default HireMe;