import React, {useReducer} from 'react';
import "./Form.css";

function Form({formValue, changed, edit, editFunc, addFunc}) {
    return (
        <form>
            <div className="inputs">
                <div className="input">
                    <label>Title: </label>
                    <input placeholder="Title" value={formValue.title} onChange={changed} id="title"/>
                </div>
                <div className="input">
                    <label>Bio: </label>
                    <input placeholder="Bio" value={formValue.bio} onChange={changed} id="bio"/>
                </div>
                <div className="input">
                    <label>Description: </label>
                    <textarea rows="5" placeholder="Description" value={formValue.des} onChange={changed} id="des"></textarea>
                </div>
            </div>
            {(edit.id)? <button className="blue-btn" onClick={e => {
                e.preventDefault()
                editFunc(e)
            }}>Edit item</button> : <button className="gray-btn" onClick={(e)=> {
                    e.preventDefault()
                    addFunc(e)
            }}>Add</button>}

        </form>
    );
}

export default Form;