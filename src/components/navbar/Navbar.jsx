import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navhalf1'>
                <h2
                    style={{
                        color: 'orangered',
                        fontFamily: 'Cursive'
                    }}>
                    IBTIHAJ <span
                        style={{ color: 'white' }}
                    >SALEEM</span></h2>
            </div>
            <div className='Navhalf2'>
                <Link className="Navbaritems" to="../Signup">Signup</Link>
                <Link className="Navbaritems" to="../Login">Login</Link>
                <Link className="Navbaritems" to="../Jokes">Jokes</Link>
                <Link className="Navbaritems" to="../Calculator">Calculator</Link>
                <Link className="Navbaritems" to="../Counter">Counter</Link>
                <Link className="Navbaritems" to="../Todolist">Todolist</Link>
                <Link className='Navbaritems' to="/home">Home</Link>
            </div>
        </div>
    )
}

export default Navbar