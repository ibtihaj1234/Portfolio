import React from 'react'
import CalculatorComp from '../components/calculatorComp/CalculatorComp'
import Navbar from '../components/navbar/Navbar'

function Calculator() {
    return (
        <>
            <Navbar />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: 'black',
                    height: '150vh'
                }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '8%',
                    width: '30%'
                }}>
                    <CalculatorComp />
                </div>
            </div>
        </>
    )
}

export default Calculator
