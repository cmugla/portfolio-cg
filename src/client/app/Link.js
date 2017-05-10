import React, { Component } from 'react'
import classNames from 'classnames'
import Scroll, { scroller } from 'react-scroll'

class Link extends Component {
  state = {}

  goToElement = () => {
    console.log('goToElement', this.props.to)
    scroller.scrollTo(this.props.to, {
      duration: 200,
      delay: 0,
      smooth: true,
    })
  }

  render() {
    return (
      <a href={`#${this.props.to}`} onClick={this.goToElement}>{this.props.children}</a>
    )
  }
}

export default Link
