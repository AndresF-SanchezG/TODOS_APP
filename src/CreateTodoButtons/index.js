import './CreateButton.css'

function CreateTodoButtons({ setOpenModal }) {
    return(
      <button className='CreateTodoButton' onClick={()=>
        {
          setOpenModal(state => !state);
      
        }
      }>+</button>
    )
  }

  export { CreateTodoButtons };