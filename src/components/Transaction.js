import React from 'react'
import { Link } from 'react-router-dom'

export default function Transaction({trans, index}) {
  return (
    <tr>
        <Link to={`/budget/${index}`}>
        <td>{trans.date} </td>
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
