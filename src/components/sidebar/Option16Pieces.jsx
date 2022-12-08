import React from 'react';

function Option16Pieces({background, parts16}) {
    const handleClick = (e) => {
        e.currentTarget.classList.toggle("marked");
    }

    return (
        <>
            {parts16.map(({backgroundRepeat, backgroundSize, backgroundPosition, className, text}, idx) =>
                <div key={idx}
                     style={{backgroundImage: background,
                         backgroundRepeat,
                         backgroundSize,
                         backgroundPosition}}
                     onClick={e => handleClick(e)}
                     className={className}>{text}</div>
            )}
        </>
    );
}

export default Option16Pieces;