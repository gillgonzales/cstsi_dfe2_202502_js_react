import { useContext } from 'react';
import { StateTodosList } from '../../context/TodosListProvider';

export default function TodoFields({
  propInputTitleRef,
  propInputTextRef,
}) {

  console.log({propInputTitleRef,propInputTextRef})

  const { editedTodo, createTodo } = useContext(StateTodosList);
  return (
    <fieldset>
      <legend>
        {' '}
        {editedTodo?.title ? 'Edite a' : 'Criar uma nova'} Tarefa
      </legend>
      <label>Título:</label>
      <input type="text" placeholder="Título da tarefa" ref={propInputTitleRef} />
      <br />
      <label>Texto:</label>
      <input type="text" placeholder="Texto da tarefa" ref={propInputTextRef} />
      <hr />
      <button onClick={createTodo}>
        {editedTodo?.title ? 'Editar' : 'Criar'} Tarefa
      </button>
    </fieldset>
  );
}
