import React from 'react'
import axios from 'axios'
import Transaction from './Transaction';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
const API = process.env.REACT_APP_API_URL;


export default function AllTransactions() {
    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        axios.get(`${API}/budget`)
            .then((res) => setTransaction(res.data))
            .catch((err) => console.log(err))
    }, [])



    return (

        <Table>
       
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Item Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
          <tbody>
            {transaction.map((trans, id) => {
                return (
                    <Transaction key={id} trans={trans} id={id} />
                )
            }
            )}
           
           </tbody>
           
        </Table>
    )
}
