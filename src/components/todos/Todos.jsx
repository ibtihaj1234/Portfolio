import React from 'react'
import InputComponent from '../inputComponent/InputComponent'
import ButtonComponent from '../button/Button'


const Todos = ({
    list,
    setList,
    updateItem,
    setUpdateItem,
    setTextfield,
    setNewdata,
    newdata
}) => {


    // EDIT 
    const handleEdit = (elem) => {
        // const dispatch = useDispatch(updatedTodo)
        setUpdateItem(elem)
        setTextfield(true)
    }

    // Cancel Button

    const cancel = (element) => {
        setUpdateItem(element)
        setTextfield(false)
    }

    // Update Text Field

    const Newtext = (event) => {
        setNewdata(event.target.value)
    }

    // Update Button

    const handleUpdate = (e) => {
        // const dispatch = useDispatch(updatedTodo)
        setList(prev => prev.map(e => e.id === updateItem.id ? { ...e, name: newdata } : e))
        setUpdateItem({})
        setNewdata("")
    }

    // DELETE

    const handleDelete = (id) => {
        let confirm = window.confirm("Are you sure you want Delete")
        if (!confirm) {
            return
        }
        setList(prev => prev.filter(e => e.id !== id))
    }

    // COMPLETED

    const cutit = (elem, index,) => {
        setList(prev => prev.map(e => e.id === elem.id ? { ...e, completed: !e.completed } : e))
    }

    return (
        <div style={{ width: '80%', border: '5px solid orangered', borderRadius: '10px', height: '60vh', overflow: 'scroll', overflowX: 'none' }}>
            {list.map((elem, index) => {
                return (
                    <div key={elem.id} style={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 12, fontFamily: 'Cursive', color: 'white' }}>
                        <p
                            style={elem.completed ? { textDecoration: 'line-through' } : {}}>
                            {elem.name}</p>

                        {/* Edit Button */}

                        <ButtonComponent
                            title="Edit"
                            onClick={() => handleEdit(elem)} />

                        {/* Delete Button */}

                        <ButtonComponent
                            title="Delete"
                            onClick={() => handleDelete(elem.id)}
                        />

                        {/* Completed Button */}

                        <ButtonComponent
                            title={elem.completed ? "Incomplete" : "Completed"}
                            onClick={() => cutit(elem, index)}
                        />

                        {/* Options On Edit*/}

                        {updateItem?.id === elem?.id ? (
                            <>
                                <InputComponent type={"text"} onChange={Newtext} value={newdata} />
                                <ButtonComponent title="Update" onClick={() => handleUpdate(elem.id)} />
                                <ButtonComponent title="Cancel" onClick={() => cancel(elem)} />
                            </>
                        ) : null}
                    </div>

                )
            })
            }
        </div>
    )
}

export default Todos