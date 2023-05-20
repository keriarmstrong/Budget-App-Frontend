import axios from 'axios';
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

export default function Subtotal() {
    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        axios.get(`${API}/budget`)
            .then((res) => setTransaction(res.data))
            .catch((err) => console.log(err))
    }, [transaction])

    function calculateSubtotal() {
        let subtotal = 0
        transaction.forEach((trans) => {
          if (trans.amount > 0) {
            return subtotal += Number(trans.amount);
          } else if (trans.amount < 0) {
            return subtotal -= -Number(trans.amount);
          } 
        }) ;
        return subtotal
      }

      const subtotal = calculateSubtotal();

  return ({subtotal})
}
