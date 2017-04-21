import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from './Header.js'
import Content from './Content.js'
import ShoutOuts from './ShoutOuts.js'
import Footer from './Footer.js'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
        <ShoutOuts />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));