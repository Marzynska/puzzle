import React, {useState} from 'react';

function GameField4({background, markedElement}) {

    // const chosenField = (e) => {
    //     e.style ={{
    //         background: "red"
    //     }}
    // }

    const correctBgPosition1 = "0 0";
    const correctBgPosition2 = "100% 0";
    const correctBgPosition3 = "0 100%";
    const correctBgPosition4 = "100% 100%";

    return (
        <div  className="mainField">
            <div className="board">
                <div className="row row4">
                    <div className="puzzle puzzle4 puzzle4-1" onClick={() => chosenField(e)}
                         // style={{backgroundImage: background,
                         //     backgroundPosition: "0 0"}}
                    >1</div>
                    <div className="puzzle puzzle4 puzzle4-2" onClick={() => chosenField(e)}
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "100% 0"}}
                    >2</div>
                </div>
                <div className="row row4">
                    <div className="puzzle puzzle4 puzzle4-3" onClick={() => chosenField(e)}
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "0 100%"}}
                    >3</div>
                    <div className="puzzle puzzle4 puzzle4-4" onClick={() => chosenField(e)}
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