import React from 'react';
import {Button} from "primereact/button";

function TypeOfScore({setScores}) {

    const handleClick = (option) => {
        setScores(option);
    }

    return (
        <div className="smallerField">
            <Button label="4 pieces" className="p-button-raised p-button-secondary p-button-text p-button-sm btn-bs" onClick={()=>handleClick(4)}/>
            <Button label="9 pieces" className="p-button-raised p-button-secondary p-button-text p-button-sm btn-bs" onClick={()=>handleClick(9)}/>
            <Button label="16 pieces" className="p-button-raised p-button-secondary p-button-text p-button-sm btn-bs" onClick={()=>handleClick(16)}/>
        </div>
    );
}

export default TypeOfScore;