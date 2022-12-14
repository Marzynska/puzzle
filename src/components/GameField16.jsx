import React, {useState, useEffect} from 'react';
import Win from "./Win.jsx";

function GameField16({background, markedElement, setWin, win, timer}) {
    const [bgd1, setBgd1] = useState(null);
    const [bgd2, setBgd2] = useState(null);
    const [bgd3, setBgd3] = useState(null);
    const [bgd4, setBgd4] = useState(null);
    const [bgd5, setBgd5] = useState(null);
    const [bgd6, setBgd6] = useState(null);
    const [bgd7, setBgd7] = useState(null);
    const [bgd8, setBgd8] = useState(null);
    const [bgd9, setBgd9] = useState(null);
    const [bgd10, setBgd10] = useState(null);
    const [bgd11, setBgd11] = useState(null);
    const [bgd12, setBgd12] = useState(null);
    const [bgd13, setBgd13] = useState(null);
    const [bgd14, setBgd14] = useState(null);
    const [bgd15, setBgd15] = useState(null);
    const [bgd16, setBgd16] = useState(null);

    const chosenField = (e) => {
        e.target.style.background=background;
        e.target.style.backgroundPosition=markedElement;
        e.target.style.backgroundRepeat="no-repeat";
        e.target.style.backgroundSize="400%";
        console.log(markedElement);
    }

    const correctBgd1 = "0px 0px";
    const correctBgd2 = "33.333% 0px";
    const correctBgd3 = "66.666% 0px";
    const correctBgd4 = "100% 0px";
    const correctBgd5 = "0px 33.333%";
    const correctBgd6 = "33.333% 33.333%";
    const correctBgd7 = "66.666% 33.333%";
    const correctBgd8 = "100% 33.333%";
    const correctBgd9 = "0px 66.666%";
    const correctBgd10 = "33.333% 66.666%";
    const correctBgd11 = "66.666% 66.666%";
    const correctBgd12 = "100% 66.666%";
    const correctBgd13 = "0px 100%";
    const correctBgd14 = "33.333% 100%";
    const correctBgd15 = "66.666% 100%";
    const correctBgd16 = "100% 100%";

    useEffect (() => {
        if (bgd1 === correctBgd1 && bgd2 === correctBgd2 && bgd3 === correctBgd3 && bgd4 === correctBgd4 && bgd5 === correctBgd5 && bgd6 === correctBgd6 && bgd7 === correctBgd7 && bgd8 === correctBgd8 && bgd9 === correctBgd9 && bgd10 === correctBgd10 && bgd11 === correctBgd11 && bgd12 === correctBgd12 && bgd13 === correctBgd13 && bgd14 === correctBgd14 && bgd15 === correctBgd15 && bgd16=== correctBgd16) {
            console.log("good");
            setWin(true);
        }
    }, [bgd1, bgd2, bgd3, bgd4, bgd5, bgd6, bgd7, bgd8, bgd9, bgd10, bgd11, bgd12, bgd13, bgd14, bgd15, bgd16]);

    return (
        <div  className="mainField">
            {win ? <Win timer={timer}/> :  <div className="board">
                <div className="row">
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd1(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd2(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd3(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd4(e.target.style.backgroundPosition)}}></div>
                </div>
                <div className="row">
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd5(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd6(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd7(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd8(e.target.style.backgroundPosition)}}></div>
                </div>
                <div className="row">
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd9(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd10(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd11(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd12(e.target.style.backgroundPosition)}}></div>
                </div>
                <div className="row">
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd13(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd14(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd15(e.target.style.backgroundPosition)}}></div>
                    <div className="puzzle puzzle16" onClick={(e) => {chosenField(e); setBgd16(e.target.style.backgroundPosition)}}></div>
                </div>
            </div>}

        </div>
    );
}

export default GameField16;