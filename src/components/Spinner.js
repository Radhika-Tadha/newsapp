import React, { Component } from 'react'
import loadding from '../loadding.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadding} alt="loadding" />
      </div>
    )
  }
}
