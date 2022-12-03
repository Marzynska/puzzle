import React, {useEffect, useState} from 'react';
import { Button } from 'primereact/button';

function Form() {
    const [name, setName] = useState(" ");
    const [pieces, setPieces] = useState();
    const [img, setImg] = useState();
    const [url, setUrl] = useState(" ");

    const inputName = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const numberOfPieces = (e) => {
        setPieces(e.target.value);
        console.log(pieces);
    }

    const chooseImg = (e) => {
        setImg(e.target.value);
        console.log(img);
    }

    const inputUrl = (e) => {
        setUrl(e.target.value);
        console.log(url);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="mainField">
            <form>
                <label> Enter your name:
                    <br/>
                    <input className="textInput"
                           type="text"
                           name="name"
                           placeholder="name"
                           value={name}
                           onChange={e => inputName(e)}/>
                </label>
                <br/>
                <p className="radioDescription">Select number of pieces:</p>
                <fieldset className="radioForm" onChange={e => numberOfPieces(e)}>
                    <label><input className="radio" type="radio" name="difficulty" value={4}/>4</label>
                    <label><input className="radio" type="radio" name="difficulty" value={9}/>9</label>
                    <label><input className="radio" type="radio" name="difficulty" value={16}/>16</label>
                </fieldset>
                <br/>
                <p className="radioDescription">Select the puzzle image:</p>
                <fieldset className="radioForm" onChange={e => chooseImg(e)}>
                    <label><input className="radio" type="radio" name="image" value="img1"/><img className="imgSmall" src="../src/assets/img/img1s.jpg" alt="Image 1"/></label>
                    <label><input className="radio" type="radio" name="image" value="img2"/><img className="imgSmall" src="../src/assets/img/img2s.jpg" alt="Image 2"/></label>
                    <label><input className="radio" type="radio" name="image" value="img3"/><img className="imgSmall" src="../src/assets/img/img3s.jpg" alt="Image 3"/></label>
                    <label><input className="radio" type="radio" name="image" value="otherImg"/>other picture</label>
                </fieldset>
                <br/>
                { img === "otherImg" && <label> Do you want to try another one? Choose the path of your own image and enjoy the game :)
                    <br/>
                    <input className="textInput"
                           type="url"
                           name="ownImage"
                           placeholder="url of your picture"
                           value={url}
                           onChange={e => inputUrl(e)}/>
                </label> }
                <br/>
                <Button type="submit"
                        label="Ready to play!"
                        className="p-button-raised p-button-secondary p-button-text p-button-sm"
                        onClick={handleSubmit}
                />
            </form>
        </div>
    );
}

export default Form;