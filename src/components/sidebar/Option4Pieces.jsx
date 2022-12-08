import React from 'react';

function Option4Pieces({background, parts}) {
    const handleClick = (e) => {
        e.currentTarget.classList.toggle("marked");
    }

    return (
        <>
            {parts.map(({backgroundRepeat, backgroundSize, backgroundPosition, className, text}, idx) =>
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

export default Option4Pieces;