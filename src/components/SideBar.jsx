import React from 'react';

function SideBar({nameValue, numberOfPieces, image, url}) {

    return (
        <div className="sidebar">
            {nameValue != " " && <h2>Hello {nameValue}!</h2>}
            {numberOfPieces != " " && <p>Number of pieces: {numberOfPieces}</p>}
            {image != " " && <p>Image: {image}</p>}
            {url != " " && <p>Picture's URL: {url}</p>}

        </div>
    );
}

export default SideBar;