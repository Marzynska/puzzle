import React from 'react';
import { Button } from 'primereact/button';

function MainField(props) {
    return (
        <div className="mainField">
            {/*<h2>Nazwa zakladki</h2>*/}
            {/*<p>treść</p>*/}
            <form>
                <label> Enter your name:
                    <br/>
                    <input className="textInput" type="text" name="name" placeholder="name"/>
                </label>
                <br/>
                <p className="radioDescription">Select number of pieces:</p>
                <fieldset className="radioForm">
                    <label><input className="radio" type="radio" name="difficulty" value={4}/>4</label>
                    <label><input className="radio" type="radio" name="difficulty" value={9}/>9</label>
                    <label><input className="radio" type="radio" name="difficulty" value={16}/>16</label>
                </fieldset>
                <br/>
                <p className="radioDescription">Select the puzzle image:</p>
                <fieldset className="radioForm">
                    <label><input className="radio" type="radio" name="image" value="img1"/><img className="imgSmall" src="../src/assets/img/img1s.jpg" alt="Image 1"/></label>
                    <label><input className="radio" type="radio" name="image" value="img2"/><img className="imgSmall" src="../src/assets/img/img2s.jpg" alt="Image 2"/></label>
                    <label><input className="radio" type="radio" name="image" value="img3"/><img className="imgSmall" src="../src/assets/img/img3s.jpg" alt="Image 3"/></label>
                    <label><input className="radio" type="radio" name="image" value="otherImg"/>other picture</label>
                </fieldset>
                <br/>
                <label> Do you want to try another one? Choose the path of your own image and enjoy the game :)
                    <br/>
                    <input className="textInput" type="url" name="ownImage" placeholder="url of your picture" />
                </label>
                <br/>
                <Button label="Ready to play!" className="p-button-raised p-button-secondary p-button-text p-button-sm"/>
            </form>
        </div>
    );
}

export default MainField;