import React from 'react';
import { Button } from 'primereact/button';

import img1sJpg from '../assets/img/img1s.jpg';
import img2sJpg from '../assets/img/img2s.jpg';
import img3sJpg from '../assets/img/img3s.jpg';

function Form({getName, getNumberOfPieces, getImg, image, getUrl, url, updateSubmit}) {


    const inputName = (e) => {
        if (typeof getName === "function") {
            getName(e.target.value);
        }
    }

    const numberOfPieces = (e) => {
        if (typeof  getNumberOfPieces === "function") {
            getNumberOfPieces(e.target.value);
        }
    }

    const chooseImg = (e) => {
        if (typeof getImg === "function") {
            getImg(e.target.value);
        }
    }

    const inputUrl = (e) => {
        if (typeof getUrl === "function") {
            getUrl(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof updateSubmit === "function") {
            updateSubmit();
        }
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
                           onChange={e => inputName(e)}
                    />
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
                    <label><input className="radio" type="radio" name="image" value="img1"/><img className="imgSmall" src={img1sJpg} alt="Image 1"/></label>
                    <label><input className="radio" type="radio" name="image" value="img2"/><img className="imgSmall" src={img2sJpg} alt="Image 2"/></label>
                    <label><input className="radio" type="radio" name="image" value="img3"/><img className="imgSmall" src={img3sJpg} alt="Image 3"/></label>
                    <label><input className="radio" type="radio" name="image" value="otherImg"/>other picture</label>
                </fieldset>
                <br/>
                { image === "otherImg" && <label> Do you want to try another one? Choose the path of your own image and enjoy the game :)
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