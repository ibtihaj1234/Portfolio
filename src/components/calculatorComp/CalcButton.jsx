import React from 'react'

function CalcButton({ symbol, color, handleClick }) {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className='button'
      style={{ backgroundColor: color }}>
      {symbol}
    </div>
  )
}

export default CalcButton