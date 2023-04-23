import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;


export default function NewTransaction() {

    const navigate = useNavigate();
    const [details, setDetails] = useState({
        
            id:"",
            item_name: "",
            amount: "",
            date: "",
            from: "",
            category: ""  
    })

    function addTransaction(newTransaction){
        axios
        .post(`${API}/budget`, newTransaction)
        .then(() => {

        })
    }


  return (
    <div className='AddNew'>
        <form>
        <label>Date</label>
        <input id='date' type='text' placeholder='mm-dd-yyyy' />
        <br/>
        <br/>
        <label>Name</label>
        <input id='name' type='text' placeholder='name' />
        <br/>
        <br/>
        <label>Amount</label>
        <input id='amount' type='text' placeholder='amount' />
        <br/>
        <br/>
        <label>From</label>
        <input id='from' type='text' placeholder='from' />
       <br/>
       <br/>
       <input type='submit'/>
        </form>
    </div>
  )
}