import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import "./styles.css";

/*
A todo item should have the following attributes:
- text
- completed
- unique id

Should be able to mark as completed or not
Should be able to delete the todo
*/

export default class Todos extends React.Component {
  state = {
    todos: [
      {
        text: "New todo",
        completed: true,
        id: 12345
      },
      {
        text: "another todo",
        completed: false,
        id: 1456
      }
    ],
    newTodo: {
      text: ""
    }
  };

  handleNewtodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 9999),
      completed: false,
      text: this.state.newTodo.text
    };

    this.setState((prevState) => {
      return { ...prevState, todos: [...this.state.todos, newTodo] };
    });
    this.setState({ newTodo: { text: "" } });
    // Complete the logic
  };

  handleChange = (e) => {
    this.setState({ newTodo: { text: e.target.value } });
    // Complete the logic
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    const { todos } = this.state;

    const filteredTodos = todos.filter((todo) => todo.id !== id);

    this.setState((prevState) => {
      return { ...prevState, todos: filteredTodos };
    });
    // Complete the logic
  };

  handleCompleteChange = (e, id) => {
    // Complete the logic
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    });
  };

  render() {
    const {
      newTodo: { text },
      todos
    } = this.state;

    return (
      <div>
        <NewTodo
          onChange={this.handleChange}
          onSubmit={this.handleNewtodo}
          text={text}
        />
        <TodoList
          todoItems={todos}
          onCompleteChange={this.handleCompleteChange}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
