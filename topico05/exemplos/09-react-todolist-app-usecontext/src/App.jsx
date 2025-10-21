/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';

import './App.css';
import TodoFields from './components/TodoFields/TodoFields';
import ListTodo from './components/ListTodo/ListTodo';
import { StateTodosList } from './context/TodosListProvider';

function App() {
  const { listTodos,
      setEditedTodo,
       inputTitleRef,
       inputTextRef } = useContext(StateTodosList);
  

  console.log('renderiza', [
    inputTitleRef.current?.value,
    inputTextRef.current?.value,
  ]);

  const editTodo = (todo) => {
    setEditedTodo(todo);
    inputTitleRef.current.value = todo.title;
    inputTextRef.current.value = todo.text;
  };

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      <h1>React ToDoApp</h1>
      <TodoFields
        propInputTitleRef={inputTitleRef}
        propInputTextRef={inputTextRef}
      />
      <div className="card">
        {listTodos.length > 0 ? (
          <ListTodo editTodo={editTodo} />
        ) : (
          <p>Crie e organize suas tarefas!!!</p>
        )}
      </div>
    </>
  );
}

export default App;
