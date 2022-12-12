import React from 'react';

function GameInfo({name, timer}) {
    return (
        <>
            {name !== " " ? <h2>Hello {name}!</h2> : <h2>Hello!</h2> }
            <br />
            <p>Your time: {timer} seconds</p>
        </>
    );
}

export default GameInfo;