import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Todolist from '../views/Todolist'
import Home from '../views/Home'
import Calculator from '../views/Calculator'
import Jokes from '../views/Jokes'
import Login from '../views/auth/Login'
import Signup from '../views/auth/Signup'
import Start from '../views/Start'

const Navi = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/home" element={<Home />} />
                <Route path="/todolist" element={<Todolist />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/jokes" element={<Jokes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}

export default Navi
