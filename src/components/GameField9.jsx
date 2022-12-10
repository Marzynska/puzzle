import React from 'react';

function GameField9({pieces, img}) {

    return (
        <div  className="mainField">
            <div className="board">
                <div className="row">
                    <div className="puzzle">1</div>
                    <div className="puzzle">2</div>
                    <div className="puzzle">3</div>
                </div>
                <div className="row">
                    <div className="puzzle">4</div>
                    <div className="puzzle">5</div>
                    <div className="puzzle">6</div>
                </div>
                <div className="row">
                    <div className="puzzle">7</div>
                    <div className="puzzle">8</div>
                    <div className="puzzle">9</div>
                </div>
            </div>

        </div>
    );
}

export default GameField9;