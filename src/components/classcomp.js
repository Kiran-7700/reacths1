import React, { Component } from 'react'
import "./classcomp.css";

export class Classcomp extends Component {
  render() {
    return (
      <div className='class_component'>
            <h1>This is created using Class Component</h1>
            <p>This is done using External CSS</p>
            <p className="special_p2">This is done using Inline CSS</p>
      </div>
    )
  }
}

export default Classcomp;

