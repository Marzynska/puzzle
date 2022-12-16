import React from 'react';

import GameField4 from "./GameField4.jsx";
import GameField9 from "./GameField9.jsx";
import GameField16 from "./GameField16.jsx";

import img1Jpg from '../assets/img/img1.jpg?url';
import img2Jpg from '../assets/img/img2.jpg?url';
import img3Jpg from '../assets/img/img3.jpg?url';

function GameField({pieces, img, url, markedElement, setWin, win, timer}) {
    let background;
    if (img === "img1") {
        background = `url(${img1Jpg})`;
    } else if (img === "img2") {
        background = `url(${img2Jpg})`;
    } else if (img === "img3") {
        background = `url(${img3Jpg})`;
    } else {
        background = `url("${url}")`;
    }

    return (
        <>
                {pieces === "4" && <GameField4 background={background} markedElement={markedElement} setWin={setWin} win={win} timer={timer}/>}
                {pieces === "9" && <GameField9 background={background} markedElement={markedElement} setWin={setWin} win={win} timer={timer}/>}
                {pieces === "16" && <GameField16 background={background} markedElement={markedElement} setWin={setWin} win={win} timer={timer}/>}
        </>
    );
}

export default GameField;