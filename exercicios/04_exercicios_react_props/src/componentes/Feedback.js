//react arrow function component export
import React from 'react'

const Feedback = props => {
  return (
    <div className='d-flex justify-content-evenly m-2'>
      <button 
        type='button' 
        className='btn btn-outline-primary'
        onClick={props.funcaoOK}>
          {props.textoOK}
      </button>
      <button 
        type='button' 
        className='btn btn-outline-danger'
        onClick={props.funcaoNOK}>
          {props.textoNOK}
        </button>
    </div>
  )
}

export default Feedback