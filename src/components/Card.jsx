import React from 'react';
import "./Card.css";


function Card({title, bio, des, editFunc, deleteFunc}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <h4>{bio}</h4>
            <p>{des}</p>
            <div className="btns">
                <button className="blue-btn" onClick={editFunc}>Edit Item</button>
                <button className="gray-btn" onClick={deleteFunc}>Delete</button>
            </div>
        </div>
    );
}

export default Card;