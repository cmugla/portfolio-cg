import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render () {
    return (
      <div>
        <header id="main-header">
          <h1>Celeste Glavin</h1>
          <h3>web design &amp; development</h3>
          <div className="arrow-down"></div>
        </header>
      </div>
    )
  }
}

export default Header
