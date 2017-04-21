import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from './Header.js'
import Content from './Content.js'
import ShoutOuts from './ShoutOuts.js'
import Footer from './Footer.js'

export default class App extends Component {
  render () {
    const linkAnimationProps = {
      smooth: true,
      offset: 50,
      duration: 500, 
      delay: 1000,
      activeClass: 'active',
    }

    return (
      <div>
        <Header />
        <Content { ...{ linkAnimationProps } } />
        <ShoutOuts />
        <Footer { ...{ linkAnimationProps } } />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));