import React from 'react';

function GameField({pieces, img, timer}) {

    let row = Math.sqrt(pieces);

    return (
        <div  className="mainField">
            <div className="board">
                <div className="row">
                    <div className="puzzle puzzle1">1</div>
                    <div className="puzzle puzzle2">2</div>
                </div>
                <div className="row">
                    <div className="puzzle puzzle3">3</div>
                    <div className="puzzle puzzle4">4</div>
                </div>
            </div>

        </div>
    );
}

export default GameField;