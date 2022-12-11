import React, {useState, useEffect} from 'react';
import Form from "../components/Form.jsx";
import SideBar from "../components/sidebar/SideBar.jsx";
import GameField from "../components/GameField.jsx";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

function MainView() {
    const [name, setName] = useState(" ");
    const [pieces, setPieces] = useState(" ");
    const [img, setImg] = useState(" ");
    const [url, setUrl] = useState(" ");
    const [submit, setSubmit] = useState(false);
    const [timer, setTimer] = useState(0);
    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const [markedElement, setMarkedElement] = useState(" ");
    // const [puzzle, setPuzzle] = useState([]);


    const toast = useRef();

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
        if (name.length >=3 && pieces !== " " && img !== " ") {
            setSubmit(true);
            setTimerIsRunning(true);
            console.log("submitted");
        } else {
            toast.current.show({severity: 'error', life: 4000, summary: 'Error', detail: 'All fields need to be filled. Name should have at least 3 characters'});
        }
    }

    const updateMarkedElement = (e) => {
        setMarkedElement(e);
    }

    useEffect(() => {
        let intervalID;
        if (timerIsRunning) {
            intervalID = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(intervalID);
    }, [timerIsRunning]);

    return (
        <div className="container">
            <Toast ref={toast} />
            {!submit ? <Form getName={updateStateName}
                            name={name}
                            getNumberOfPieces={updateStatePieces}
                            getImg={updateStateImg}
                            image={img} getUrl={updateStateUrl}
                            url={url}
                            updateSubmit={updateSubmit}/> : <GameField pieces={pieces} img={img} markedElement={markedElement}/>}
            <SideBar name={name}
                     numberOfPieces={pieces}
                     img={img}
                     url={url}
                     timer={timer}
                     submit={submit}
                     markedElement = {markedElement}
                     updateMarkedElement={updateMarkedElement}/>
        </div>
    );
}

export default MainView;