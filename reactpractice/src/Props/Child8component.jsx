import React, { Component } from 'react'

export default class Child8component extends Component {
  render() {
    // destructor
    const {subject,marks} = this.props;
    return (
      <div>
            <h3>subject = {subject}</h3>
            <h3>Marks = {marks}</h3>
      </div>
    )
  }
}
