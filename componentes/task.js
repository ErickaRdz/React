import React, { Component } from 'react';
import './task.css';
import propTypes from 'prop-types';


class Task extends Component {


    StyleCompleted(){
        return {
            fontSize: "25px",
            color: this.props.task.done ? "red" : "black",
            textDecoration: this.props.task.done ? "line-through" : "none"
        }
    }

    btnDel(){
        return{
            border: "none",
            background: "red"
        }
    }

    render(){

        const {task} = this.props;

        return <div style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id} -
            <input type="checkbox" onChange={this.props.checkDone.bind(this.bind, task.id)}/>
            <button style={this.btnDel()} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </div>
        
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

export default Task;