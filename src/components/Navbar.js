import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <h1><Link to='/budget'>Budget App</Link></h1>
            <br />
            <button><Link to='/budget/new'>New Transaction</Link></button>
        </nav>
    )
}
