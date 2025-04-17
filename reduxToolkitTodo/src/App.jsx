import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const todos = useSelector(state => state.todos)


  return (
    <>
      <h1>Learn about reduxtoolkit</h1>
      <AddTodo />
      <div className="flex flex-wrap gap-y-1">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full '
                          >
                               <Todos todo = {todo} />
                          </div>
                        ))}
                    </div>
    </>
  )
}

export default App
