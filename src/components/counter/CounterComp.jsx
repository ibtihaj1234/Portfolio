import React, { useState } from 'react'
import './styles.css'
import ButtonComponent from '../button/Button'
import InputComponent from '../inputComponent/InputComponent'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, addByAmount } from '../../redux/slices/ConterSlices'


const CounterComp = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()


    const [Increment, setIncrement] = useState(0)

    const addValue = Number(Increment) || 0

    const resetAll = () => {
        dispatch(reset());
        setIncrement(0);
    }

    const incrementWithAmount = () => {
        dispatch(addByAmount(addValue))
        setIncrement(0)
    }


    return (
        <>
            <div className='counter'>
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {count}
                </p>

                {/* Increment Decrement Buttons */}

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

                {/* Increment by amount fields */}

                <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>

                    {/* Input Field */}

                    <InputComponent
                        value={Increment}
                        onChange={(e) => setIncrement(e.target.value)}
                    />

                    {/* Add Button */}

                    <ButtonComponent
                        title='Add'
                        onClick={() => incrementWithAmount()}
                    />
                </div>

                {/* Reset Button */}

                <ButtonComponent
                    title='Reset'
                    onClick={() => resetAll()}
                />

            </div>
        </>
    )
}

export default CounterComp
