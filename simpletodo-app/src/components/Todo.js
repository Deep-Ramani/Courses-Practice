import React from 'react'
import { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

const Todo = (props) => {

  const [modelIsOpen, setModelIsOpen] = useState(false)
  function deleteHandler(){

    setModelIsOpen(true)
  }

  function closedModalHandler(){
    setModelIsOpen(false)
  }
  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div className='actions'>
      <button className='btn btn-alt' onClick={deleteHandler}>Delete</button>
      
      </div>
      {modelIsOpen ? <Modal onCancle={closedModalHandler} onConfirm={closedModalHandler}/> : null}
      {modelIsOpen ? <Backdrop onCancle={closedModalHandler}/>:null}
     
    </div>
  )
}

export default Todo
