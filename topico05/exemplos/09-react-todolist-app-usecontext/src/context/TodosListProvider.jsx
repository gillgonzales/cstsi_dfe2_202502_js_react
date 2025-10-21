import { useState, createContext, useRef } from 'react';

export const StateTodosList = createContext({
  inputTitleRef:{},
  inputTextRef:{},
  listTodos: [],
  editedTodo: {},
  createTodo: ()=>{},
  newTodo: () => {},
  deleteTodo: () => {},
  setEditedTodo: () => {},
});

export const TodosListProvider = ({ children }) => {
 
  const [listTodos, setListTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});
  const inputTitle = useRef();
  const inputText = useRef();
  
  const createTodo = () => {
    console.log('createTodo do TodosListProvider')
      let title = inputTitle?.current?.value;
      let text = inputText?.current?.value;

      console.log({title,text})
  
      if (!title || !text) return;
  
      newTodo({ title, text });
      inputTitle.current.value = '';
      inputText.current.value = '';
    };

  
  
  const newTodo = ({ title, text }) => {
    //createEditTodo
    setListTodos((_listTodos) => {
      let new_todo = { title, text };
      if (!editedTodo?.title) {
        return [..._listTodos, new_todo];
      }

      let updatedListTodo = _listTodos.filter(
        (todo) => todo != editedTodo.title && todo.text != editedTodo.text
      );
      setEditedTodo({});
      return [...updatedListTodo, new_todo];
    });
  };

  const deleteTodo = (_todo) => {
    setListTodos((_listTodos) => {
      return _listTodos.filter((todo) => todo.title != _todo.title);
    });
  };


  return (
    <StateTodosList.Provider
      value={{
        inputTitleRef: inputTitle,
        inputTextRef: inputText,
        listTodos,
        editedTodo,
        createTodo,
        newTodo,
        deleteTodo,
        setEditedTodo,
      }}
    >
      {children}
    </StateTodosList.Provider>
  );
};
