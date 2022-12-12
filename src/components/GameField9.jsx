import React, {useState, useEffect} from 'react';
import Win from "./Win.jsx";

function GameField9({background, markedElement, setWin, win, timer}) {
    const [bgd1, setBgd1] = useState(null);
    const [bgd2, setBgd2] = useState(null);
    const [bgd3, setBgd3] = useState(null);
    const [bgd4, setBgd4] = useState(null);
    const [bgd5, setBgd5] = useState(null);
    const [bgd6, setBgd6] = useState(null);
    const [bgd7, setBgd7] = useState(null);
    const [bgd8, setBgd8] = useState(null);
    const [bgd9, setBgd9] = useState(null);

    const chosenField = (e) => {
        e.target.style.background=background;
        e.target.style.backgroundPosition=markedElement;
        e.target.style.backgroundRepeat="no-repeat";
        e.target.style.backgroundSize="300%";
        console.log(markedElement);
    }

    const correctBgd1 = "0px 0px";
    const correctBgd2 = "50% 0px";
    const correctBgd3 = "100% 0px";
    const correctBgd4 = "0px 50%";
    const correctBgd5 = "50% 50%";
    const correctBgd6 = "100% 50%";
    const correctBgd7 = "0px 100%";
    const correctBgd8 = "50% 100%";
    const correctBgd9 = "100% 100%";

    useEffect (() => {
        if (bgd1 === correctBgd1 && bgd2 === correctBgd2 && bgd3 === correctBgd3 && bgd4 === correctBgd4 && bgd5 === correctBgd5 && bgd6 === correctBgd6 && bgd7 === correctBgd7 && bgd8 === correctBgd8 && bgd9 === correctBgd9) {
            console.log("good");
            setWin(true);
        }
    }, [bgd1, bgd2, bgd3, bgd4, bgd5, bgd6, bgd7, bgd8, bgd9]);

    return (
        <div  className="mainField">
            {win ? <Win timer={timer}/> :  <div className="board">
                <div className="row">
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd1(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd2(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd3(e.target.style.backgroundPosition)}}></div>
                </div>
                <div className="row">
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd4(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd5(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd6(e.target.style.backgroundPosition)}}></div>
                </div>
                <div className="row">
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd7(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd8(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle9" onClick={(e) => {chosenField(e); setBgd9(e.target.style.backgroundPosition)}}></div>
                </div>
            </div>}

        </div>
    );
}

export default GameField9;