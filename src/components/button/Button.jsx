import React from 'react'
import '../style.css'

const ButtonComponent = (props) => {

    const { title, onClick, bgcolor } = props

    return (
        <div>
            <button
                style={bgcolor ? { backgroundColor: bgcolor } : {}}
                className='block'
                onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default ButtonComponent
