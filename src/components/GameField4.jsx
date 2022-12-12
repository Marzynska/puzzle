import React, {useState, useEffect} from 'react';
import Win from "./Win.jsx";

function GameField4({background, markedElement, setWin, win, timer}) {
    const [bgd1, setBgd1] = useState(null);
    const [bgd2, setBgd2] = useState(null);
    const [bgd3, setBgd3] = useState(null);
    const [bgd4, setBgd4] = useState(null);

    const chosenField = (e) => {
        e.target.style.background=background;
        e.target.style.backgroundPosition=markedElement;
        e.target.style.backgroundRepeat="no-repeat";
        e.target.style.backgroundSize="200%";
        console.log(markedElement);
    }

    const correctBgd1 = "0px 0px";
    const correctBgd2 = "100% 0px";
    const correctBgd3 = "0px 100%";
    const correctBgd4 = "100% 100%";

    useEffect (() => {
        if (bgd1 === correctBgd1 && bgd2 === correctBgd2 && bgd3 === correctBgd3 && bgd4 === correctBgd4) {
            console.log("good");
            setWin(true);
        }
    }, [bgd1, bgd2, bgd3, bgd4]);

    return (
        <div  className="mainField">
            {win ? <Win timer={timer}/> :  <div className="board">
                <div className="row">
                    <div className="puzzle" onClick={(e) => {chosenField(e); setBgd1(e.target.style.backgroundPosition)}}
                    ></div>
                    <div className="puzzle" onClick={(e) => {chosenField(e); setBgd2(e.target.style.backgroundPosition)}}
                    ></div>
                </div>
                <div className="row">
                    <div className="puzzle" onClick={(e) => {chosenField(e); setBgd3(e.target.style.backgroundPosition)}}
                    ></div>
                    <div className="puzzle" onClick={(e) => {chosenField(e); setBgd4(e.target.style.backgroundPosition)}}
                    ></div>
                </div>
            </div>}

        </div>
    );
}

export default GameField4;