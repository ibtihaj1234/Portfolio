import React, { useState } from 'react'
import Input from '../components/input/Input'
import Navbar from '../components/navbar/Navbar'
import Todos from '../components/todos/Todos'

const Todolist = () => {

    const [item, setItem] = React.useState("")
    const [list, setList] = useState([])
    const [updateItem, setUpdateItem] = useState("")
    const [textfield, setTextfiled] = useState(false)
    const [newdata, setNewdata] = useState("")
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' , width: '100%', backgroundColor: 'black' , height:'100vh' }}>
                {/* InputComponent */}
                <Input
                    item={item}
                    setItem={setItem}
                    list={list}
                    setList={setList}
                    updateItem={updateItem}
                    setUpdateItem={setUpdateItem}
                />

                <br /> <br />
                {/* TodosComponent */}
                {list.length === 0 ? <p style={{color:'white' , fontFamily:'cursive'}}>No Todos RN</p> :
                    <Todos
                        list={list}
                        setList={setList}
                        setItem={setItem}
                        updateItem={updateItem}
                        setUpdateItem={setUpdateItem}
                        setTextfield={setTextfiled}
                        textfield={textfield}
                        open={open}
                        setOpen={setOpen}
                        newdata={newdata}
                        setNewdata={setNewdata}
                    />
                }
                <br /><br />
            </div>


        </div>
    )
}

export default Todolist
