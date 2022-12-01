import React from 'react';
import TypeOfScore from "../components/TypeOfScore.jsx";
import Score from "../components/Score.jsx";

function BestScore() {
    return (
        <div className="container">
            <Score />
            <TypeOfScore />
        </div>
    );
}

export default BestScore;