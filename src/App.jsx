import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import MyTodoList from './components/MyTodoList';
import Eventhandling from './components/Eventhandling';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="">
      {/* <MyTodoList /> */}
    {/* <div className="main-container"> */}
      {/* <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading" >TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem = {deleteListItem}/>
          )
        })}

      </div> */}
      <BrowserRouter>
      <main>
        <Routes>
          <Route path="Eventhandling" element={<Eventhandling />}/>
        </Routes>
      </main>
      </BrowserRouter>

    </div>
  )
}

export default App