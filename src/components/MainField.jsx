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
                    <input type="text" name="name" placeholder="name" />
                </label>
                <br/>
                <fieldset>
                    <legend>Select number of pieces</legend>
                    <label><input className="radio" type="radio" name="difficulty" value={4}/>4</label>
                    <label><input className="radio" type="radio" name="difficulty" value={9}/>9</label>
                    <label><input className="radio" type="radio" name="difficulty" value={16}/>16</label>
                </fieldset>
                <br/>
                <fieldset>
                    <legend>Select the puzzle image</legend>
                    <label><input type="radio" name="image" value="img1"/>img1</label>
                    <label><input type="radio" name="image" value="img2"/>img2</label>
                    <label><input type="radio" name="image" value="img3"/>img3</label>
                </fieldset>
                <br/>
                <label> Do you want to try another one? Choose the path of your own image and enjoy the game :)
                    <br/>
                    <input type="url" name="ownImage" placeholder="url of your picture" />
                </label>
                <br/>
                <Button label="Ready to play!" className="p-button-raised p-button-secondary p-button-text p-button-sm"/>
            </form>
        </div>
    );
}

export default MainField;