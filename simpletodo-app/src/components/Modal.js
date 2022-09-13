import React from 'react'

const Modal = (props) => {

  function onCancleHandler(){
    props.onCancle()
  }

  function onConfirmHandler(){
    props.onCancle()
  }
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={onCancleHandler}>Cancle</button>
      <button className='btn' onClick={onConfirmHandler}>Confirm</button>
    </div>
  )
}

export default Modal
