import React, {useState, useEffect} from 'react';
import {puzzle4} from "../PuzzleSettings.jsx";
import {puzzle9} from "../PuzzleSettings.jsx";
import {puzzle16} from "../PuzzleSettings.jsx";
import GameInfo from "./GameInfo.jsx";
import Option4Pieces from "./Option4Pieces.jsx";
import Option9Pieces from "./Option9Pieces.jsx";
import Option16Pieces from "./Option16Pieces.jsx";

function SideBar({name, numberOfPieces, img, url, timer, submit}) {
    const [parts, setParts] = useState(puzzle4);
    const [parts9, setParts9] = useState(puzzle9);
    const [parts16, setParts16] = useState(puzzle16);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        setParts(parts.sort(() => Math.random() - 0.5));
        setParts9(parts9.sort(() => Math.random() - 0.5));
        setParts16(parts16.sort(() => Math.random() - 0.5));
    }, [numberOfPieces]);

    let background;
    if (img === "img1") {
        background = "url('../src/assets/img/img1.jpg')";
    } else if (img === "img2") {
        background = "url('../src/assets/img/img2.jpg')";
    } else if (img === "img3") {
        background = "url('../src/assets/img/img3.jpg')";
    } else {
        background = `url("${url}")`;
    }

    let markedArray = []
    if (marked) {
        e.currentTarget.classList.toggle("marked");

    }

    return (
        <div className="sidebar">
            <GameInfo name={name} timer={timer}/>
            {submit && <div className="pieces">
                {numberOfPieces === "4" && <Option4Pieces background={background} parts={parts}/>}
                {numberOfPieces === "9" && <Option9Pieces background={background} parts9={parts9}/>}
                {numberOfPieces === "16" && <Option16Pieces background={background} parts16={parts16}/>}
            </div>}

        </div>
    );
}

export default SideBar;