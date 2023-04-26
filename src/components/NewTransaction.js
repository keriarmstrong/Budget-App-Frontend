import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const API = process.env.REACT_APP_API_URL;
const unique_id = uuid();


export default function NewTransaction() {


    const navigate = useNavigate();
    const [details, setDetails] = useState({
        id: unique_id,
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: ""
    });

    function addTransaction() {
        let newTrans = details
        axios
            .post(`${API}/budget`, newTrans)
            .then(() => {
                navigate('/budget');
            }).catch((err) => console.log(err))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTransaction()
    }

    function handleTextChange(e) {
        setDetails({ ...details, [e.target.id]: e.target.value })
    }

    return (
        <div className='newTransFormContainer'>
            <form className='newTransForm' onSubmit={handleSubmit}>
                <label>Date</label>
                <input onChange={handleTextChange} id='date' type='date' value={details.date} placeholder='mm-dd-yyyy' />
                <br />
                <br />
                <label>Name</label>
                <input onChange={handleTextChange} id='item_name' type='text' value={details.item_name} placeholder='name' />
                <br />
                <br />
                <label>Amount</label>
                <input onChange={handleTextChange} id='amount' type='number' value={details.amount} placeholder='amount' />
                <br />
                <br />
                <label>From</label>
                <input onChange={handleTextChange} id='from' type='text' value={details.from} placeholder='from' />
                <br />
                <br />
                <label>Category</label>
                <input onChange={handleTextChange} id='category' type='text' value={details.category} placeholder='from' />
                <br />
                <br />
                <input type='submit' />
            </form>
        </div>
    )
}
