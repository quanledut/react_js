import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    let {id,title,completed} = this.props.todo;
    return (
        <p style = {this.getItemStyle()}>
          <input type = 'checkbox' checked = {this.props.todo.completed} onChange = {this.props.onMarkComplete.bind(this,id)}/>
          {' '} {title}
          <button style = {{ float: 'right', backgroundColor:'#ff0000', borderRadius:'40%', padding: '2px 5px'}} onClick = {this.props.onDelTodo.bind(this,id)}>X</button>
        </p>
    )
  }

  getItemStyle = () => {
    return{
      backgroundColor:'#ccc',
      border: '2px green',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '2px'
    }
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
  onDelTodo: PropTypes.func.isRequired
}

export default TodoItem
