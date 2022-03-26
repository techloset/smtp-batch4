import React, { Component } from 'react'

export default class Button extends Component {
  componentWillReceiveProps(newProps){
    
  }
  render() {
    // console.log("this.props", this.props);
    return (
      <div onClick={this.props.onPress}>{this.props.text}</div>
    )
  }
}
