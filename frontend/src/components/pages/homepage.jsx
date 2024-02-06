import axios from 'axios'
import { active } from 'd3';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


import './pages style/homepage.css';
import './pages style/button-styling.css';

function Homepage() {

  const url = 'http://127.0.0.1:8000/';
  const [todos, setTodos] = useState([]);

  const [inputTodo, setInputTodo] = useState('');
  const [inputTodoDescription, setInputTodoDescription] = useState('');
  const [activeTodo, setactiveTodo] = useState(null);

  const getAllTodos = () => {
    axios.get(url + 'todo/list/')
      .then(res => {
        setTodos(res.data)
        console.log(res.data)
      })
      .catch (err => {
        console.error(err);
      })
  }

  const todoMarkStatus = task => {
    axios.put(url+ `todo/${task.id}/update/`,{
      'title': task.title,
      'status': !task.status
    }).then(res => {
      getAllTodos()
    }).then(err => {
      console.error(err)
    })
  }


  const addTodo= () => {

    if(activeTodo == null) {

    axios.post(url+ 'todo/add/',{
      'title': inputTodo,
      'description': inputTodoDescription,
      'status': false
    }).then(res => {
      getAllTodos()
    }).then(err => {
      console.error(err)
    })

  }else{

    axios.put(url+ `todo/${activeTodo.id}/update/`,{
      'title': inputTodo,
      'description': inputTodoDescription,
      'status': activeTodo.status
    }).then(res => {
      setInputTodo()
      setInputTodoDescription()
      getAllTodos()
    }).then(err => {
      console.error(err)
    })
  }}

  const updateTodo = task => {
    setactiveTodo(task)
    setInputTodo(task.title)
    setInputTodoDescription(task.description)
  }

  const deleteTodo = task => {
    axios.delete(url+`todo/${task.id}/destroy/`)
    .then(res => {
      getAllTodos()
    })
    .catch(err => {
      console.error(err)
    })
  }

  const handleChange =(e) => {
    setInputTodo(e.target.value)
    console.log(inputTodo)
  }

  const DescriptionChange =(f) => {
    setInputTodoDescription(f.target.value)
    console.log(inputTodoDescription)
  }

  useEffect(() => {
    getAllTodos()
  },[])


/*     

Link supposed to send the user to the view 

<Link to={`/todo/${task.id}`}>                   
  <button className="todo-delete"></button>
</Link>
  */
  
  return (
    <div className='home-container'>

        <div className='form-container'>
          <div className='todo-input'>
            <input 
              type="text" 
              placeholder="Ajoutez un Todo"
              value={inputTodo}
              onChange={e => handleChange(e)}
              />

            <input 
              type="text" 
              placeholder="Ajoutez une description"
              value={inputTodoDescription}
              onChange={f => DescriptionChange(f)}
              />

            <button 
                onClick={addTodo} 
                diseabled={!inputTodo.trim()}
                className='todo-field'>

              Valider
            </button>
          </div>
        </div>

      <div className='todo-container'>
        <ul>
          {
            todos.map(task => {

              return (
                <div className='todo-content'>
                  <input type="checkbox" onChange={e => {todoMarkStatus(task)}} className='todo-checkbox'/>
                      {
                        task.status ?
                          <strike>{task.title}</strike>
                          :task.title
                      }

                  <div className='home-button'>
                    <button 
                      onClick={e => updateTodo(task)} 
                      className='todo-edit'>Edit</button>
                    <button className="todo-delete" onClick={e => {deleteTodo(task)}}>
                      Delete
                    </button>

                  </div>
                </div>
              )
              
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default Homepage