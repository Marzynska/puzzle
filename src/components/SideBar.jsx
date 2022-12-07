import React, {useState} from 'react';
import {puzzle4} from "./PuzzleSettings.jsx";

function SideBar({name, numberOfPieces, img, url, timer}) {
    const [parts, setParts] = useState(puzzle4);

    let background;
    if (img === "img1") {
        background = "url('../src/assets/img/img1s.jpg')";
    } else if (img === "img2") {
        background = "url('../src/assets/img/img2s.jpg')";
    } else if (img === "img3") {
        background = "url('../src/assets/img/img3s.jpg')";
    } else {
        background = `url("${url}")`;
    }

    const handleClick = (e) => {
        e.currentTarget.style.border = `3px solid blue;
    }

    return (
        <div className="sidebar">
            {name !== " " && <h2>Hello {name}!</h2>}
            <div className="gameInfo">
                <p>Your time: {timer} seconds</p>
                <br/>
                <p>You clicked .... times</p>
            </div>
            <div className="pieces">
                {parts.map(({backgroundRepeat, backgroundSize, backgroundPosition, className, text}, idx) =>
                    <div key={idx}
                         style={{backgroundImage: background,
                                backgroundRepeat,
                                backgroundSize,
                                backgroundPosition}}
                         onClick={e => handleClick(e)}
                         className={className}>{text}</div>
                )}
            </div>

        </div>
    );
}

export default SideBar;