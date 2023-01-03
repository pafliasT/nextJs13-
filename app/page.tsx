import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

function Home() {
  return (
    
    // showcase of react suspense instaed of custom loading component
    // react suspense is a react feature that allows you to show a loading
    // component while the component is being loaded
    // without blocking the UI.
    // https://reactjs.org/docs/concurrent-mode-suspense.html

    <div>
      <Suspense fallback={<p className="text-red-500">Loading the toDos...</p>}>
        <h1>Loading ToDos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense
        fallback={<p className="text-blue-500">Loading the Shopping Cart...</p>}
      >
        <h1>Loading Shopping Cart</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;

