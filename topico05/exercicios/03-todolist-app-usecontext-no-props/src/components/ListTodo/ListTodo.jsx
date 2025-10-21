/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Todo from '../Todo/Todo';
import { ContextTodosList } from '../../context/TodosListProvider';

export default function ListTodo() {
  const { listTodos, editTodo } = useContext(ContextTodosList);
  return (
    <>
      <p>Suas Tarefas:</p>
      <ol>
        {listTodos.map((todo, i) => (
          <Todo key={i} todo={todo} editTodo={editTodo} />
        ))}
      </ol>
    </>
  );
}
