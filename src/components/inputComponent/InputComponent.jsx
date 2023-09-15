import React from 'react'
import '../style.css'

const InputComponent = (props) => {
    const { type, onChange, value, placeholder, style } = props
    return (
        <div>
            <input
                className='InputButton'
                style={style}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder} />
        </div>
    )
}

export default InputComponent