import React, { useState } from 'react'
import './style.css'
import InputComponent from '../inputComponent/InputComponent'
import Button from '../button/Button'
import axios from 'axios'


const LoginComp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const Clear = () => {
        setEmail('')
        setPassword('')
    }

    const Login = () => {
        if (!password.trim() || !email.trim()) {
            alert('both fields are mandetory');
            return
        }

        setLoading(false)

        axios.post(
            'https://enjoy-19070.botics.co/api/v1/login/',
            {
                username: email.trim(),
                password: password.trim(),
            })
            .then(result => {
                console.log("Result ==> ", result)
            })
            .catch(err =>
                console.log("Error while login!", err))
    }

    return (
        <div className='Login_page'>
            <div className='Login_section'>
                <div className='Login_inputs'>
                    <InputComponent
                        style={{ width: '100%' }}
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Type your email'
                    />
                    <InputComponent
                        style={{ width: '100%' }}
                        type='text'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Type your email'
                    />
                </div>
                <div className='Login_buttons'>
                    <Button
                        bgcolor='blue'
                        title='Clear'
                        onClick={() => { Clear(); setLoading(true) }}
                    />
                    <Button
                        bgcolor='blue'
                        title={!loading ? 'Wait' : 'Login'}
                        onClick={() => Login()}
                        disable={loading}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginComp
