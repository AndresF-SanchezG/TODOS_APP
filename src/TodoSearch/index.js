import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
    

    return(
      <input placeholder='Presiona (+) e ingresa tu primer TODO' className="TodoSearch" value={searchValue} onChange={(event)=>{
        setSearchValue(event.target.value)

      }}/>
    )
  }

  export { TodoSearch };
