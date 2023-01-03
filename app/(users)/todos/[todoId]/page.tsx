import React from "react";
import { Todo } from "../../../../typings";
import { notFound } from "next/navigation";

// use of dynamicParamas to control fetchTodo() input
export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } } // revalidate token every 60 seconds
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if(!todo.id) return notFound(); // if todo.id is undefined, 
                                  // return 404(replace with custom page)

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id} {todo.title}
      </p>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json(); // custom type Todo from typings.d.ts

  const trimmedTodos = todos.slice(0, 10);
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
