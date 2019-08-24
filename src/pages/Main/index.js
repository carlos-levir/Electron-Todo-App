import React, { useState, useEffect } from "react";
import crypto from "crypto";

import {
  Container,
  NewTodo,
  NewTodoInput,
  TodosList,
  Todo,
  TodoName,
  Button,
  AddTodoMessage
} from "./styles";

const { ipcRenderer } = window.require("electron");

export default function Main() {
  const [todos, setTodos] = useState([]);

  function handleNewTodo(e) {
    e.preventDefault();
    const newTodo = e.target.todo.value;

    if (!newTodo) return;

    const todo = {
      id: crypto.randomBytes(256),
      name: newTodo
    };

    setTodos([...todos, todo]);

    const message = {
      title: "Um novo todo foi criado",
      body: `O todo ${todo.name} foi criado`
    };

    ipcRenderer.send("@notification/REQUEST", message);

    e.target.reset();
  }

  function handleRemoveTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  function renderTodos() {
    return todos.map(todo => (
      <Todo key={todo.id}>
        <TodoName>{todo.name}</TodoName>

        <Button onClick={() => handleRemoveTodo(todo.id)}>Concluir</Button>
      </Todo>
    ));
  }

  function handleNotificationFailure(message) {
    console.log(message);
  }

  useEffect(() => {
    ipcRenderer.on("@notification/FAILURE", handleNotificationFailure);

    return () => {
      ipcRenderer.removeListener(
        "@notification/FAILURE",
        handleNotificationFailure
      );
    };
  }, []);

  return (
    <Container>
      <NewTodo onSubmit={handleNewTodo}>
        <NewTodoInput name="todo" placeholder="Novo todo" />
        <Button>Adicionar</Button>
      </NewTodo>
      {todos.length > 0 ? (
        <TodosList>{renderTodos()}</TodosList>
      ) : (
        <AddTodoMessage>Adicione um novo todo :D</AddTodoMessage>
      )}
    </Container>
  );
}
