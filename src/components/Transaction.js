import React from 'react'
import { Link } from 'react-router-dom'

export default function Transaction({trans, id}) {
  return (
    <tr>
        <Link to={`/budget/${id}`}>
        <td>{trans.date} </td>
        <td>{trans.item_name} </td>
        <td>{trans.category} </td>
        <td>{trans.from} </td>
        <td>{trans.amount} </td> 
        </Link>
        <br/>
        <hr/>
        <br/>
    </tr>
  )
}
