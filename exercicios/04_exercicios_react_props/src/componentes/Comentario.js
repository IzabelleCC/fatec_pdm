import React from "react";

export default (props) => (
  <>
    <section className='d-flex '>
      <div className='d-flex align-items-center'>
        <img src={props.foto}/>
      </div>
      <div className='flex-grow-1 border ms-2'>
        <h4 className='text'>{props.nome}</h4>
        <p className='text'>{props.texto}</p>
      </div>
    </section>
  </>
)