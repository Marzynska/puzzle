import React, {useState, useEffect} from 'react';

function GameField4({background, markedElement, setWin, setTimerIsRunning}) {
    const [bgd1, setBgd1] = useState(null);
    const [bgd2, setBgd2] = useState(null);
    const [bgd3, setBgd3] = useState(null);
    const [bgd4, setBgd4] = useState(null);

    const chosenField = (e) => {
        e.target.style.background=background;
        e.target.style.backgroundPosition=markedElement;
        e.target.style.backgroundRepeat="no-repeat";
        e.target.style.backgroundSize="200%";
        // console.log(background);
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
            // setTimerIsRunning(false);
        }
    }, [bgd1, bgd2, bgd3, bgd4]);


    return (
        <div  className="mainField">
            <div className="board">
                <div className="row row4">
                    <div className="puzzle puzzle4-1" onClick={(e) => {chosenField(e); setBgd1(e.target.style.backgroundPosition)}}
                         // style={{backgroundImage: background,
                         //     backgroundPosition: "0 0"}}
                    >1</div>
                    <div className="puzzle puzzle4-2" onClick={(e) => {chosenField(e); setBgd2(e.target.style.backgroundPosition)}}
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "100% 0"}}
                    >2</div>
                </div>
                <div className="row row4">
                    <div className="puzzle puzzle4-3" onClick={(e) => {chosenField(e); setBgd3(e.target.style.backgroundPosition)}}
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "0 100%"}}
                    >3</div>
                    <div className="puzzle puzzle4-4" onClick={(e) => {chosenField(e); setBgd4(e.target.style.backgroundPosition)}}
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "100% 100%"}}
                    >4</div>
                </div>
            </div>

        </div>
    );
}

export default GameField4;