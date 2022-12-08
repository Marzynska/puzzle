import React, {useState} from 'react';
import {puzzle4} from "../PuzzleSettings.jsx";
import {puzzle9} from "../PuzzleSettings.jsx";
import {puzzle16} from "../PuzzleSettings.jsx";
import GameInfo from "./GameInfo.jsx";
import Option4Pieces from "./Option4Pieces.jsx";
import Option9Pieces from "./Option9Pieces.jsx";
import Option16Pieces from "./Option16Pieces.jsx";

function SideBar({name, numberOfPieces, img, url, timer}) {
    const [parts, setParts] = useState(puzzle4);
    const [parts9, setParts9] = useState(puzzle9);
    const [parts16, setParts16] = useState(puzzle16);

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

    return (
        <div className="sidebar">
            <GameInfo name={name} timer={timer}/>
            <div className="pieces">
                {numberOfPieces === "4" && <Option4Pieces background={background} parts={parts}/>}
                {/*<Option4Pieces background={background} parts={parts}/>*/}
                {numberOfPieces === "9" && <Option9Pieces background={background} parts9={parts9}/>}
                {numberOfPieces === "16" && <Option16Pieces background={background} parts16={parts16}/>}

            </div>

        </div>
    );
}

export default SideBar;