import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function EditTransactionForm() {

  const navigate = useNavigate();
  let {id} = useParams();
  const [transaction, setTransaction] = useState({
    id: "",
            item_name: "",
            amount: "",
            date: "",
            from: "",
            category: "" 
  })
  function handleTextChange(e){
    setTransaction({...transaction, [e.target.id]:[e.target.value]})
  };

  useEffect(() =>{
    axios
    .get(`${API}/budget/${id}`)
    .then((res) => {
      setTransaction(res.data)
    })
    .catch((err) => console.log(err))
  }, [id]);

  function updateTransaction(){
    axios
    .put(`${API}/budget/${id}`, transaction)
    .then((res) => {
      setTransaction(res.data);
      navigate(`/budget/${id}`)
    })
    .catch((err) => console.log(err))
  };

  function handleSubmit(e){
    e.preventDefault();
    updateTransaction();
  };

  return (
    <div className='editTrans'>
    <form onSubmit={handleSubmit}>
    <label>Date</label>
    <input onChange={handleTextChange} id='date' type='text' value={transaction.date} placeholder='mm-dd-yyyy' />
    <br/>
    <br/>   
    <label>Name</label>
    <input onChange={handleTextChange} id='item_name' type='text' value={transaction.item_name} placeholder='name' />
    <br/>
    <br/>
    <label>Amount</label>
    <input onChange={handleTextChange} id='amount' type='text' value={transaction.amount} placeholder='amount' />
    <br/>
    <br/>
    <label>From</label>
    <input onChange={handleTextChange} id='from' type='text' value={transaction.from} placeholder='from' />
   <br/>
   <br/>
    <label>Category</label>
    <input onChange={handleTextChange} id='category' type='text' value={transaction.category} placeholder='from' />
   <br/>
   <br/>
   <input type='submit'/>
    </form>
</div>
  )
}
