import React, { } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo } from '../../redux/slices/TodosSlices'
import ButtonComponent from '../button/Button'
import InputComponent from '../inputComponent/InputComponent'
const Input = (props) => {

    const {
        item,
        setItem,
        list,
        setList
    } = props

    // const Todos= useSelector((state)=>state.Todos.item)
    // const dispatch = useDispatch()
    // InputField

    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    // Submit

    const submit = (elem) => {
        !item ?
            alert("Enter any thing") :

            // dispatch(addTodo({id:Todos.length + 1, list , completed:false }))
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
