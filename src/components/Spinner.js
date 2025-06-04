import React from 'react'
import loadding from '../loadding.gif'
const Spinner=()=> {

    return (
      <div className='text-center my-3'>
        <img src={loadding} alt="loadding" />
      </div>
    )
  }
export default Spinner
