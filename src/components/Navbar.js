import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import mntBg from '../assets/mountain.png'

export default function Navbar({subtotal}) {
    return (
        <nav className='navbar' style={{ backgroundImage: `url(${mntBg})`, 'backgroundSize': '100%', 'backgroundRepeat': 'no-repeat' }}>
            <div className='navHeader'>
                <h1 ><Link to='/budget' style={{textDecoration:"none", color: "white"}}>Budget App</Link></h1>
            </div>
            <br />
            <div><h3>Subtotal: ${subtotal}</h3></div>
            <div className='newTransBtn'>
            <Link to='/budget/new'><Button variant="outline-dark">New Transaction</Button></Link>
            </div>
        </nav>
    )
}
