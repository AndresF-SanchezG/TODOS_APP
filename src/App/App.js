import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  
  
  return (
    <TodoProvider>
        <AppUI
      // loading={loading}
      // error={error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
    />
    </TodoProvider>
    
  );
}

export default App;