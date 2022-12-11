import React from 'react';
import GameField4 from "./GameField4.jsx";
import GameField9 from "./GameField9.jsx";
import GameField16 from "./GameField16.jsx";

function GameField({pieces, img, markedElement}) {
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
        <>
                {pieces === "4" && <GameField4 background={background} markedElement={markedElement}/>}
                {pieces === "9" && <GameField9 background={background}/>}
                {pieces === "16" && <GameField16 background={background}/>}
        </>
    );
}

export default GameField;