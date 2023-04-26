import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navHeader'>
                <h1><Link to='/budget'>Budget App</Link></h1>
            </div>
            <br />
            <div className='newTransBtn'>
                <button><Link to='/budget/new'>New Transaction</Link></button>
            </div>
        </nav>
    )
}
