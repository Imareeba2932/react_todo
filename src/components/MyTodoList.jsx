import React, { useState } from 'react'

const MyTodoList = () => {

    let count = 0;

    const [first, setfirst] = useState(0);

    const [todoList, setTodoList] = useState([]);

    const addTodo = (e) => {
        if(!e.target.value.trim()) return;
        if (e.key === 'Enter') {
            console.log(e.target.value);
           
            setTodoList([...todoList, e.target.value]);
            console.log([...todoList, e.target.value]);
            e.target.value = '';
        }
    }

    const deleteTodo = (index) => {
        console.log(index);

        // todoList.splice(index, 1);  don't do this since its readonly

        const temp = todoList;
        temp.splice(index, 1);

        setTodoList([...temp]);

    }

    return (
        <div>
            <div className='container'>

                <h1 className='text-white'>{count}</h1>
                <h1 className='text-white'>{first}</h1>



                <button className='btn btn-primary' onClick={() => { count++; console.log(count); }} >Click</button>
                <button className='btn btn-primary' onClick={() => { setfirst(first + 1); console.log(first); }} >Update State</button>
                <h1 className='text-center text-white'>ToDo List</h1>
                <hr />
                <div className="card">
                    <div className="card-header">
                        <input type="text" className='form-control' onKeyDown={addTodo} />
                    </div>
                    <div className="card-body">
                        {todoList.map((todo, index) => {
                            return (
                                <div className='d-flex'>
                                    <h4>{index+1}. {todo}</h4>
                                    <span className="icons">
                                        <i className="fa-solid fa-trash icon-delete"
                                        onClick={() => { deleteTodo(index) }}
                                        ></i>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTodoList;