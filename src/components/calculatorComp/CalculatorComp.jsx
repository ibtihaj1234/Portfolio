import React, { useState } from 'react'
import CalcButton from './CalcButton'
import CalcInput from './CalcInput'
import * as math from 'mathjs'
import './style.css'

function CalculatorComp() {

    const [result, setResult] = useState("")
    const [text, setText] = useState("")

    const addText = (val) => {
        setText((text) => [...text, val + ""])
    }

    const removeData = () => {
        setResult("")
        setText("")
    }

    const calculateResult = () => {
        const input = text.join("")
        setResult(math.evaluate(input))
    }

    return (
        <div className='calcScr'>
            <CalcInput text={text} result={result} />
            <div className='row'>
                <CalcButton symbol={'7'} handleClick={addText} />
                <CalcButton symbol={'8'} handleClick={addText} />
                <CalcButton symbol={'9'} handleClick={addText} />
                <CalcButton symbol={'/'} handleClick={addText} color='orange' />
            </div>
            <div className='row'>
                <CalcButton symbol={'4'} handleClick={addText} />
                <CalcButton symbol={'5'} handleClick={addText} />
                <CalcButton symbol={'6'} handleClick={addText} />
                <CalcButton symbol={'*'} handleClick={addText} color='orange' />
            </div>
            <div className='row'>
                <CalcButton symbol={'1'} handleClick={addText} />
                <CalcButton symbol={'2'} handleClick={addText} />
                <CalcButton symbol={'3'} handleClick={addText} />
                <CalcButton symbol={'+'} handleClick={addText} color='orange' />
            </div>
            <div className='row'>
                <CalcButton symbol={'0'} handleClick={addText} />
                <CalcButton symbol={'.'} handleClick={addText} color='orange' />
                <CalcButton symbol={'='} color='orange' handleClick={calculateResult} />
                <CalcButton symbol={'-'} handleClick={addText} color='orange' />
            </div>
            <CalcButton symbol={'Clear'} handleClick={removeData} color='orange' />
        </div>
    )
}

export default CalculatorComp