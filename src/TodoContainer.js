import axios from 'axios'
import { useEffect, useState } from 'react';
import CreateTodo from './CreateTodo.js'

const TodoContainer = () => {
    const [dataGet, setDataGet] = useState();
    const [renderTodo, setRendertodo] = useState();
    const [deleteTaks, setDeleteTaks] = useState();
    const [updateTaksId, setUpdateTaksId] = useState();
    const [updateTaksValue, setUpdateTaksValue] = useState();

    // GET
    useEffect(() => {
        axios.get('https://todos-academlo.herokuapp.com/api/todos', { mode: "cors" })
            .then((results) => {
                setDataGet(results.data.todos)
            })

    }, [])

    // DELETE
    useEffect(() => {
        if (deleteTaks) {
            const re = axios({
                url: `https://todos-academlo.herokuapp.com/api/todo/${deleteTaks}`,
                mode: "cors",
                method: 'DELETE'
            })

            re.then(() => {
                setDataGet((prevState) => prevState.filter((value) => value._id !== deleteTaks))
            })
        }
        console.log(dataGet);
        console.log(updateTaksValue);
    }, [deleteTaks, updateTaksValue])

    useEffect(() => {
        if (updateTaksId) {
            console.log(updateTaksId)
            axios({
                url: `https://todos-academlo.herokuapp.com/api/todo/${updateTaksId}`,
                data: updateTaksValue,
                method: 'PUT'
            })
        }
    }, [updateTaksId])

    const onDelete = (id) => {
        setDeleteTaks(id)
    }

    const onUpdate = (id, isCompleted) => {
        if (isCompleted === false) {
            isCompleted = true
        }else{
            isCompleted = false
        }
        setUpdateTaksValue({isCompleted: isCompleted})
        setUpdateTaksId(id)
    }

    useEffect(() => {
        if (dataGet) {
            const render = dataGet.map((value) =>
                <div key={value._id}>
                    <h2>{value.task}</h2>
                    <p>{value.student}</p>
                    <button onClick={() => onDelete(value._id)}>Delete</button>
                    <label>
                        <input type="checkbox" onChange={() => onUpdate(value._id, value.isCompleted)}/>
                        checkbox
                        </label>
                </div>
            )
            setRendertodo(render)
        }
    }, [dataGet])

    return (
        <div>
            {renderTodo === null ? 'Cargando' : renderTodo}
        </div>
    )
}

export default TodoContainer;