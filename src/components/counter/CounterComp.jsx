import React, { useState } from 'react'
import './styles.css'
import ButtonComponent from '../button/Button'
import InputComponent from '../inputComponent/InputComponent'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../redux/slices/ConterSlices'


const CounterComp = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()


    const [Increment, setIncrement] = useState(0)




    return (
        <>
            <div className='counter'>
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {count}
                </p>

                {/* Buttons */}

                <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>

                    {/* Increment Button */}

                    <ButtonComponent
                        title='+'
                        onClick={() => { dispatch(increment()) }} />

                    {/* Decrement Button */}

                    <ButtonComponent
                        title='-'
                        onClick={() => { dispatch(decrement()) }} />
                </div>
                <ButtonComponent
                    title='Reset'
                    onClick={() => { dispatch(reset()) }}
                />

            </div>
        </>
    )
}

export default CounterComp
