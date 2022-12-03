import React, {useState} from 'react';
import Form from "../components/Form.jsx";
import SideBar from "../components/SideBar.jsx";
import GameField from "../components/GameField.jsx";

function MainView() {
    const [name, setName] = useState(" ");
    const [pieces, setPieces] = useState(" ");
    const [img, setImg] = useState(" ");
    const [url, setUrl] = useState(" ");

    const updateStateName = (value) => {
        setName(value);
    }
    const updateStatePieces = (value) => {
        setPieces(value);
    }
    const updateStateImg = (value) => {
        setImg(value);
    }
    const updateStateUrl = (value) => {
        setUrl(value);
    }

    return (
        <div className="container">
            <Form getName={updateStateName} getNumberOfPieces={updateStatePieces} getImg={updateStateImg} image={img} getUrl={updateStateUrl} url={url}/>
            {/*<GameField />*/}
            <SideBar nameValue={name} numberOfPieces={pieces} image={img} url={url}/>
        </div>
    );
}

export default MainView;