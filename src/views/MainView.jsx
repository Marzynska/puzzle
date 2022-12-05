import React, {useState, useEffect} from 'react';
import Form from "../components/Form.jsx";
import SideBar from "../components/SideBar.jsx";
import GameField from "../components/GameField.jsx";

function MainView() {
    const [name, setName] = useState(" ");
    const [pieces, setPieces] = useState("4");
    const [img, setImg] = useState(" ");
    const [url, setUrl] = useState(" ");
    const [submit, setSubmit] = useState(false);

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
    const updateSubmit = () => {
        setSubmit(true);
        console.log("submitted");
    }
    useEffect(() => {
        if (name.length >3 ) {
            console.log("imię dłuższe niz 3")
        }
        console.log(pieces)
    }, [submit]);

    return (
        <div className="container">
            {/*<Form getName={updateStateName} name={name} getNumberOfPieces={updateStatePieces} getImg={updateStateImg} image={img} getUrl={updateStateUrl} url={url} updateSubmit={updateSubmit}/>*/}
            <GameField pieces={pieces} img={img}/>
            <SideBar name={name} numberOfPieces={pieces} image={img} url={url}/>
        </div>
    );
}

export default MainView;