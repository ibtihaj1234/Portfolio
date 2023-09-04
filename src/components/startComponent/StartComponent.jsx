import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'

const StartComponent = () => {
    return (
        <div className='page'>
        <div className='animate'>
            <h1 className='typed-text'>Eat Sleep Code repeat</h1>
        </div>
            <div className='nav'>
                <Link className="navitems" to="../Signup">Signup</Link>
                <Link className="navitems" to="../Login">Login</Link>
                <Link className="navitems" to="../Jokes">Jokes</Link>
                <Link className="navitems" to="../Calculator">Calculator</Link>
                <Link className="navitems" to="../Todolist">Todolist</Link>
                <Link className='navitems' to="/home">Home</Link>
            </div>
        </div>
    )
}

export default StartComponent
