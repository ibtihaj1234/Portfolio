import React from 'react'
import '../style.css'

const ButtonComponent = (props) => {

    const { title, onClick } = props

    return (
        <div>
            <button className='block' onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default ButtonComponent
