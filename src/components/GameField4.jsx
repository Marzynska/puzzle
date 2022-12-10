import React from 'react';

function GameField4({pieces, background}) {


    return (
        <div  className="mainField">
            <div className="board">
                <div className="row row4">
                    <div className="puzzle puzzle4-1"
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "0 0"}}
                    >1</div>
                    <div className="puzzle puzzle4-2"
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "100% 0"}}
                    >2</div>
                </div>
                <div className="row row4">
                    <div className="puzzle puzzle4-3"
                         // style={{backgroundImage: background,
                         //     backgroundRepeat: "no-repeat",
                         //     backgroundSize: "200%",
                         //     backgroundPosition: "0 100%"}}
                    >3</div>
                    <div className="puzzle puzzle4-4"
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