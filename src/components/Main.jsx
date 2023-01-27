import React, {useEffect, useReducer, useState} from 'react';
import Card from "./Card";
import "./Main.css";
import Form from "./Form";
import axios from "axios";
import useData from "./useData";
// Address
const Address = "http://localhost:3000/cards"
// Form reducer
const initialForm = {
    title: "",
    bio: "",
    des: ""
}
const getRandomId = () => Math.floor((Math.random() * 10000000))
function reducer(state, {type, value}){
    switch (type){
        case "title":
            state.title = value
            return {...state}
        case "bio":
            state.bio = value
            return {...state}
        case "des":
            state.des = value
            return {...state}
        case "reset":
            return initialForm
        case "all":
            return value
        default :
            return state
    }
}
function Main() {
    const [formValue, dispatch] = useReducer(reducer, initialForm)
    const [editObj, setEditObj] = useState({})
    function changed(e){
        dispatch({value: e.target.value, type: e.target.id})
    }
    const [data, add, edit, remove] = useData(Address)
    const cards = data.map(item => <Card key={item.id} deleteFunc={()=> remove(item)} editFunc={() => {
        setEditObj(item)
        dispatch({ type: "all", value: {
                title: item.title,
                bio: item.bio,
                des: item.des
            }})
    }
    } title={item.title} bio={item.bio} des={item.des}/>)
    return (
        <div className="container">
            <div className="cards">
                {cards}
            </div>
            <Form edit={(editObj)} editFunc={()=>{
                formValue.id = editObj.id
                edit(formValue)
                setEditObj({})
                dispatch({type: "reset"})
            }}
                  addFunc={() => {
                      formValue.id = getRandomId()
                      add(formValue)
                      dispatch({type: "reset"})}}
                  formValue={formValue} changed={changed} />
        </div>
    );
}

export default Main;