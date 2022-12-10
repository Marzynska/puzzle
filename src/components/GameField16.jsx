import React from 'react';

function GameField16({pieces, img}) {

    return (
        <div  className="mainField">
            <div className="board">
                <div className="row">
                    <div className="puzzle">1</div>
                    <div className="puzzle">2</div>
                    <div className="puzzle">3</div>
                    <div className="puzzle">4</div>
                </div>
                <div className="row">
                    <div className="puzzle">5</div>
                    <div className="puzzle">6</div>
                    <div className="puzzle">7</div>
                    <div className="puzzle">8</div>
                </div>
                <div className="row">
                    <div className="puzzle">9</div>
                    <div className="puzzle">10</div>
                    <div className="puzzle">11</div>
                    <div className="puzzle">12</div>
                </div>
                <div className="row">
                    <div className="puzzle">13</div>
                    <div className="puzzle">14</div>
                    <div className="puzzle">15</div>
                    <div className="puzzle">16</div>
                </div>
            </div>

        </div>
    );
}

export default GameField16;