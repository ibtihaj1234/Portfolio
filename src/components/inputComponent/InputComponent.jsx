import React from 'react'
import '../style.css'

const InputComponent = (props) => {
    const { type, onChange, value, placeholder } = props
    return (
        <div>
            <input className='InputButton' type={type} onChange={onChange} value={value} placeholder={placeholder} />
        </div>
    )
}

export default InputComponent