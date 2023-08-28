import axios from 'axios'
import React, { useState } from 'react';
import ButtonComponent from '../button/Button';
import './style.css'
const JokesComp = () => {

    const [jokes, setJokes] = useState('Press for joke');
    const [punch, setPunch] = useState('')
    const [show, setShow] = useState(false)

    const API = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke").then(result => {
            setJokes(result.data.setup)
            setPunch(result.data.punchline)
            setShow(true)
        })

    }
    return (
        <div className='Jokes'>
            <h1>{jokes}</h1>
            {!show ? <h1>{punch}</h1> : ''}
            <div className='buttons'>
                <ButtonComponent
                    title='Punch'
                    onClick={() => setShow(false)}
                />
                <ButtonComponent
                    title='Joke'
                    onClick={API}
                />
            </div>
        </div>
    )
}

export default JokesComp