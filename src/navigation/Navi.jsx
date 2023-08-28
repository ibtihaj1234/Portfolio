import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Todolist from '../views/Todolist'
import Home from '../views/Home'
import Calculator from '../views/Calculator'
import Jokes from '../views/Jokes'

const Navi = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todolist" element={<Todolist />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/jokes" element={<Jokes />} />
            </Routes>
        </>
    )
}

export default Navi
