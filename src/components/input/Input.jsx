import React, { } from 'react'
import ButtonComponent from '../button/Button'
import InputComponent from '../inputComponent/InputComponent'

const Input = (props) => {

    const {
        item,
        setItem,
        list,
        setList
    } = props

    // InputField

    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    // Submit

    const submit = (elem) => {
        // const dispatch = useDispatch(addTodo)
        !item ?
            alert("Enter any thing") :
            setList((prevValue) => {
                return [...prevValue, {
                    id: list.length ? list.length + 1 : 1,
                    name: item,
                    completed: false
                }]
            })

        setItem("")

    }
    return (
        <div className='todo'>
            <div className='todofields'>
                <InputComponent
                    type={"text"}
                    placeholder="Type your Task"
                    onChange={itemEvent}
                    value={item}
                />
                <ButtonComponent
                    title="Submit"
                    onClick={() => submit()}
                />
            </div>
        </div>
    )

}


export default Input
