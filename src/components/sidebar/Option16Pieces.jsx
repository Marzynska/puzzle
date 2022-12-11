import React from 'react';

function Option16Pieces({background, parts16, isClicked}) {


    return (
        <>
            {parts16.map(({backgroundRepeat, backgroundSize, backgroundPosition, className, text}, idx) =>
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

export default Option16Pieces;