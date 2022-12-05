import React, {useState} from 'react';

function SideBar({name, numberOfPieces, image, url}) {
    // const [parts, setParts] = useState(["part1", "part2", "part3", "part4"]);
    //
    const handleClick = (e) => {
        e.currentTarget.classList.toggle("marked");
    }

    return (
        <div className="sidebar">
            {name != " " && <h2>Hello {name}!</h2>}
            {/*{numberOfPieces != " " && <p>Number of pieces: {numberOfPieces}</p>}*/}
            {/*{image != " " && <p>Image: {image}</p>}*/}
            {/*{url != " " && <p>Picture's URL: {url}</p>}*/}
            <div className="gameInfo">
                <p>Your time:</p>
                <p>counter</p>
                <br/>
                <p>You clicked .... times</p>
            </div>
            {/*<ul className="pieces">*/}
            {/*    {parts.map((element, index) =>*/}
            {/*        <li key={index} onClick={(e) => handleClick(e)} >{index}</li>*/}
            {/*        // <li key={index}, className=`part ${element}`, onClick={(e) => handleClick(e)} ></li>*/}
            {/*    )}*/}
            {/*</ul>*/}
            <div className="pieces">
                <div id="part1" className="part part1 marked" onClick={(e) => handleClick(e)}></div>
                <div id="part2" className="part part2 used" onClick={(e) => handleClick(e)}></div>
                <div id="part3" className="part part3" onClick={(e) => handleClick(e)}></div>
                <div id="part4" className="part part4" onClick={(e) => handleClick(e)}></div>
            </div>

        </div>
    );
}

export default SideBar;