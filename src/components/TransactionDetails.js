import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams,  } from 'react-router-dom'
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

  
    return (
    <div>
        <p>{transaction.date}</p>
        <p>{transaction.item_name}</p>
        <p>{transaction.amount}</p>
        <p>{transaction.category}</p>
        <p>{transaction.from}</p>
        <br/>
        <div className='editBtn'>
        <Link to={`/budget/${id}/edit`}>
        <button>Edit</button>
        </Link>
        </div>
        <div>
            <button>Delete</button>
        </div>
      single Item Details
    </div>
  )
}
