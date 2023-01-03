import React from "react";
import Link from "next/link";
import { Todo } from "../../../typings";

const fetchTodos = async () => {
  // stimulate a promise
  // with a random number from 1 to 5 seconds
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  //rest of api call
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

// display todos
async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            {" "}
            Todo: {todo.id}
          </Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
