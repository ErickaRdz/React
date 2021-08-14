import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import tasks from './ejemplos/tasks.json';
import Tasks from './componentes/tasks.js';
import Tasksform from './componentes/tasksform.js';
import Posts  from './componentes/posts.js';

class App extends React.Component{
  
  state = {
    tasks: tasks
  }

  addTask= (title, description)=> {
   const newTask ={
     title: title,
     description: description,
     id: this.state.tasks.length
   }
    this.setState({
    tasks:[...this.state.tasks, newTask]
  })
}

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(tasks => tasks.id !== id)
    this.setState({tasks: newTasks})
    console.log(newTasks)
  }

  checkDone = (id) => {
    const newTasks =  this.state.tasks.map(task => {
      if (task.id === id){
        task.done =  !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }
  
  render(){
    return <div>
      <Router>
      <Link to = "/">Home</Link>
      <br/>
      <Link to = "/posts">Post</Link>

      <Route exact path="/" render={() => {
        return <div>
        <Tasksform addTask={this.addTask}/>
        <Tasks 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask} 
          checkDone={this.checkDone}
        />
        </div>
      }}>

      </Route>
      <Route path="/posts" component={Posts}/>
      </Router>
    </div>
  }
}


export default App;
