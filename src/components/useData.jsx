import React, {useState, useEffect} from 'react';
import axios from "axios";
function UseData(address) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(address).then(response => setData(response.data))
    },[])
    function add(obj){
        axios.post(address, obj).then(response => {
            setData([...data])
            return true
        }).catch(response => false)
        data.push(obj)
    }
    function edit(obj){
        axios.put(`${address}/${obj.id}`, obj).then(response => {
            axios.get(address).then(response => setData(response.data))
            return true
        }).catch(response => false)

    }
    function remove(obj){
        axios.delete( `${address}/${obj.id}`).then(response => {
            axios.get(address).then(response => setData(response.data))
            return true
        }).catch(response => false)
    }
    return [data, add, edit, remove]
}

export default UseData;