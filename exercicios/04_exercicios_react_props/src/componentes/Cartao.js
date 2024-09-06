import React from 'react'

const Cartao = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>{props.children}</div>
        <div className='card-header texxt-muted'>{props.rodape}</div>
    </div>
  )
}

export default Cartao