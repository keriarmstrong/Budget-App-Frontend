import React from 'react'
import axios from 'axios'
import Transaction from './Transaction';
import { useState, useEffect } from 'react';
const API = process.env.REACT_APP_API_URL;


export default function AllTransactions() {
  const [transaction, setTransaction] = useState([])
  
    useEffect(()=> {
    axios.get(`${API}/budget`)
    .then((res)=> setTransaction(res.data))
    .catch((err)=> console.log(err))
  },[])
  
  console.log(transaction)
    return (
    <div>
     
      {transaction.map((trans, id) => {
        // console.log(e)
      return (<Transaction key={id} trans={trans} id={id}/>)}
    )}
    </div>
  )
}
