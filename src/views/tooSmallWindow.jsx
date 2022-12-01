import React, { useState, useEffect } from 'react';

function TooSmallWindow(props) {
    const [dimension, setDimention] = useState();

    useEffect(() => {
        window.addEventListener("resize", () => {
            setDimention({
                ...dimension,
                width: window.innerWidth,
                height: window.innerHeight
            });

        })
    },[window.innerWidth]);

    console.log(dimension);
    return (
        <>
            {width < 800 && <p>Your window is too small! Try to make the window bigger or open the game on another device!</p>}
        </>
    );
}

export default TooSmallWindow;