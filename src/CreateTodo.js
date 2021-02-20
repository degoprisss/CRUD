import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'
const CreateTodo = ({}) => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [newTaks, setNewTaks] = useState()
 
  useEffect(() => {
    if (newTaks) {
      const res = axios({
        url: 'https://todos-academlo.herokuapp.com/api/todo',
        data: newTaks,
        method: 'POST'
      })
    }
  }, [newTaks])
  
  
    const onSubmit = (data) => {
        console.log(data);
        setNewTaks(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label style={{ display: "block", padding: 10 }}>
                    <input type="text" name='task' ref={register} placeholder='Task' />
                </label>
                <label style={{ display: "block", padding: 10 }}>
                    <input type="text" name='student' ref={register} placeholder='Student' />
                </label>
                <button>buttonText!</button>
            </form>
        </div>
    )
}

export default CreateTodo;