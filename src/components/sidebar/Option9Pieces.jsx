import React from 'react';

function Option9Pieces({background, parts9, isClicked}) {

    return (
        <>
            {parts9.map(({backgroundRepeat, backgroundSize, backgroundPosition, className, text}, idx) =>
                <div key={idx}
                     style={{backgroundImage: background,
                         backgroundRepeat,
                         backgroundSize,
                         backgroundPosition}}
                     onClick={e => isClicked(e)}
                     className={className}>{text}</div>
            )}
        </>
    );
}

export default Option9Pieces;