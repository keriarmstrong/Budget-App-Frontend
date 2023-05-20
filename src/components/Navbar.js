import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Navbar({subtotal}) {
    return (
        <nav className='navbar'>
            <div className='navHeader'>
                <h1><Link to='/budget'>Budget App</Link></h1>
            </div>
            <br />
            <div><h3>Subtotal: ${subtotal}</h3></div>
            <div className='newTransBtn'>
            <Link to='/budget/new'><Button variant="outline-dark">New Transaction</Button></Link>
            </div>
        </nav>
    )
}
