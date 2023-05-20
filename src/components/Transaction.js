import React from 'react'
import { Link } from 'react-router-dom'

export default function Transaction({ trans, id }) {
    return (
     
                <tr>
                    <td>{trans.date} </td>
                    <td>{trans.type}</td>
                    <td>
                        <Link to={`/budget/${id}`}>{trans.item_name} </Link>
                    </td>
                    <td>${trans.amount} </td>
                </tr>
     
    )
}
