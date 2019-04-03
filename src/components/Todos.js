import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
    render() {
      //this.props.todos.map((todo) => console.log(todo));
      return this.props.todos.map((todo) => (
        <TodoItem key = {todo.id}  todo = {todo} onDelTodo = {this.props.onDelTodo} onMarkComplete = {this.props.onMarkComplete} />
        ));
    }
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	onDelTodo: PropTypes.func.isRequired,
	onMarkComplete: PropTypes.func.isRequired
}

export default Todos
