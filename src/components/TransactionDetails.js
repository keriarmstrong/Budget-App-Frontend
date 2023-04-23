import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams,  } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  
const [transaction, setTransaction] = useState([])
let {id} = useParams();

    useEffect(()=>{
        
        axios
        .get(`${API}/budget/${id}`)
        .then((res) => setTransaction(res.data))
        .catch((err) => console.log(err))
    },[id])

    // console.log(`${API}/budget/${id}`);
  
    return (
    <div>
        <p>{transaction.item_name}</p>
      single Item Details
    </div>
  )
}
