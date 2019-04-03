import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }
    render() {
        return (
            <form style = {{display: 'flex'}} onSubmit = {this.onSubmit}>
                <input type = 'text' name = 'title' placeholder = 'Title here ...' value = {this.state.title} 
                    onChange = {this.onChangeText} 
                    style = {{flex: '10'}}
                    />
                <input type = 'Submit' text style = {{flex:'2', backgroundColor:'#ccc'}}/>
            </form>
        )
    }

    onChangeText = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({
            title: ''
        })
    }
}

AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired
}

export default AddTodo
