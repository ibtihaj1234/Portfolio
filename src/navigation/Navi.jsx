import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Todolist from '../views/Todolist'
import Home from '../views/Home'
import Calculator from '../views/Calculator'
const Navi = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todolist" element={<Todolist />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </>
    )
}

export default Navi
