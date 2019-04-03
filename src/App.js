import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './components/pages/About'
import './App.css';
import uuid from 'uuid';


class App extends Component {
    state = {
        todos: [
        {
            id: uuid.v4(),
            title: 'Wake up',
            completed: true
        },
        {
            id: uuid.v4(),
            title: 'Break fast',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Work',
            completed: false
        }
    ]
    }

  render() {
    console.log(this.state);
    return (
    <BrowserRouter>
         <div className="App">
            <Header/>
            <Route exact path = '/' render = {props =>(
                <>
                    <AddTodo AddTodo = {this.onAddTodo}/>
                    <Todos todos = {this.state.todos} onMarkComplete = {this.onMarkComplete} onDelTodo = {this.onDelTodo}></Todos>
                </>
            )} />
            <Route exact path = '/about' component = {About}/>
        </div>
    </BrowserRouter> 
    );
  }

  onMarkComplete = (id) => {
    this.setState({
        todos: this.state.todos.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        })
    })
  }

  onDelTodo = (id) => {
    this.setState({
        todos: [...this.state.todos.filter(todo => todo.id != id)]
    })
  }

  onAddTodo = (title) => {
    this.setState({
        todos: [...this.state.todos,
                    {
                        id:uuid.v4(),
                        title,
                        completed:false
                    }]
    })
  }
}

export default App;
