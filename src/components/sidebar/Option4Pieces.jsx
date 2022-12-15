import React from 'react';

function Option4Pieces({background, parts, isClicked}) {

    return (
        <>
            {parts.map(({id,backgroundRepeat, backgroundSize, backgroundPosition, className}) =>
                <div key={id}
                     style={{backgroundImage: background,
                         backgroundRepeat,
                         backgroundSize,
                         backgroundPosition}}
                     onClick={e => isClicked(e)}
                     className={className} />
            )}
        </>
    );
}

export default Option4Pieces;