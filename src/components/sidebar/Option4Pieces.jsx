import React from 'react';

function Option4Pieces({background, parts, isClicked}) {

    return (
        <>
            {parts.map(({id,backgroundRepeat, backgroundSize, backgroundPosition, className, text}) =>
                <div key={id}
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

export default Option4Pieces;