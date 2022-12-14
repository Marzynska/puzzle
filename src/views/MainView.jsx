import React, {useState, useEffect} from 'react';
import Form from "../components/Form.jsx";
import SideBar from "../components/sidebar/SideBar.jsx";
import GameField from "../components/GameField.jsx";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import supabase from "../services/supabase.js";


function MainView() {
    const [name, setName] = useState(" ");
    const [pieces, setPieces] = useState(" ");
    const [img, setImg] = useState(" ");
    const [url, setUrl] = useState(" ");
    const [submit, setSubmit] = useState(false);
    const [timer, setTimer] = useState(0);
    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const [markedElement, setMarkedElement] = useState(" ");
    const [win, setWin] = useState(false);


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

    useEffect(() => {
        setTimerIsRunning(false);
        if (win) {
            if (pieces === "4") {
                const bestScore4 = async() => {
                    const { data, error } = await supabase
                        .from('bestScore4')
                        .insert([
                            { name: name, time: timer },
                        ])
                }
                bestScore4();
            } else if( pieces === "9") {
                const bestScore9 = async() => {
                    const { data, error } = await supabase
                        .from('bestScore9')
                        .insert([
                            { name: name, time: timer },
                        ])
                }
                bestScore9();
            } else if ( pieces === "16") {
                const bestScore16 = async() => {
                    const { data, error } = await supabase
                        .from('bestScore16')
                        .insert([
                            { name: name, time: timer },
                        ])
                }
                bestScore16();
            }
        }
    }, [win]);

    return (
        <div className="container">
            <Toast ref={toast} />
            {!submit ? <Form getName={updateStateName}
                            name={name}
                            getNumberOfPieces={updateStatePieces}
                            getImg={updateStateImg}
                            image={img} getUrl={updateStateUrl}
                            url={url}
                            updateSubmit={updateSubmit}/> : <GameField pieces={pieces} img={img} url={url} markedElement={markedElement} setWin={setWin} win={win} timer={timer}/>}
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