<<<<<<< HEAD
import React, { Component } from 'react';
import AddTodo from '../component/AddTodo';
import Todos from '../component/todos';
import './Home.css';

class Home extends Component {
=======
import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

<<<<<<< HEAD
  
  deleteTodo = (id) => {
=======
  // the deleteTodo function simply creates a new array that removes the todo item selected from the user from the list
  // and then updates the state with the new list.
  deleteTodo = (id) => {
    // Within this function, the item's id is being utilized in order to filter it out from the todo list
    // and then updates the state with a new list
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

<<<<<<< HEAD

  addTodo = (todo) => {
    const exists = this.state.todos.find((t) => t.content === todo.content);
    if (exists) return;
    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
=======
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    const exists = this.state.todos.find(t => t.content === todo.content);
    if (exists || todo.duedate == null || todo.duedate === "Invalid Date"){ return }
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    todo.id = Math.random();
    // Create a array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];
    // Update the local state with the new array.
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
    this.setState({
      todos: new_list,
    });
  };
<<<<<<< HEAD

  render() {
    return (
      <div className="Home">
        <h1>Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
=======
  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <AddTodo addTodo={this.addTodo} />
        {/* When returning the Todos component, todos is a prop passed to the todos.js file
         to format and render the current todo list state */}
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
