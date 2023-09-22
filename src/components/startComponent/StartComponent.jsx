import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'


const StartComponent = () => {

    const [second, setSecond] = useState(59)
    const [minute, setMinute] = useState(59)
    const [hour, setHour] = useState(24)
    const [days, setDays] = useState(2)

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSecond(second - 1);
            if (second === 0) {
                setMinute(minute - 1)
                setSecond(59)
            }
            if (minute === 0) {
                setHour(hour - 1)
                setMinute(59)
            }
            if (hour === 0) {
                setDays(days - 1)
                setHour(24)
            }
        }, 1000)
        return () => clearInterval(timer)
    })

    return (
        <div className='page'>
            <div className='animate'>
                <h1 className='typed-text'>Eat Sleep Code repeat</h1>
            </div>
            <div style={{ marginLeft: "10%" }}>
                <h1
                    style={{
                        color: "#FFF",
                    }}>
                    {days} : {hour} : {minute} : {second}</h1>
            </div>
            <div className='nav'>
                <Link className="navitems" to="../Signup">Signup</Link>
                <Link className="navitems" to="../Login">Login</Link>
                <Link className="navitems" to="../Jokes">Jokes</Link>
                <Link className="navitems" to="../Calculator">Calculator</Link>
                <Link className="navitems" to="../Todolist">Todolist</Link>
                <Link className='navitems' to="/home">Home</Link>
            </div>
        </div >
    )
}

export default StartComponent
