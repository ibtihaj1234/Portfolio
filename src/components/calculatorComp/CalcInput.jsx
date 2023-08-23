import React from 'react'

const CalcInput = ({ text, result }) => {
  return (
    <div className='input-wrapper'>
      <div>
        <h1 className='result'>{result}</h1>
      </div>
      <div>
        <h3 className='text'>{text}</h3>
      </div>
    </div>
  )
}

export default CalcInput
