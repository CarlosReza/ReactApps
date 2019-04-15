import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  removeTodo(index){
    if(window.confirm("¿Esta seguro de eliminar la tarea?")){
     this.setState({
       todos: this.state.todos.filter((e,i)=>{
         return i !== index;
       })
     });
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 mt-4" key={i}>
          <div className="card mt-4" >
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-4">
                {todo.priority}
              </span>
            </div>
            <div className="class-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="class-footer">
            <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>Borrar</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation titulo="Tasks" conteo={this.state.todos.length} />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4"><TodoForm onAddTodo={this.handleAddTodo} /></div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
