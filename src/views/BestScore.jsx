import React, {useState} from 'react';
import TypeOfScore from "../components/scores/TypeOfScore.jsx";
import Score4 from "../components/scores/Score4.jsx";
import Score9 from "../components/scores/Score9.jsx";
import Score16 from "../components/scores/Score16.jsx";

function BestScore() {
    const [scores, setScores] = useState(null);

    let displayScores;
    if (scores === 16) {
        displayScores = <Score16 />
    } else if (scores === 9) {
        displayScores = <Score9 />
    } else {
        displayScores = <Score4 />
    }

    return (
        <div className="container">
            {displayScores}
            <TypeOfScore setScores={setScores}/>
        </div>
    );
}

export default BestScore;