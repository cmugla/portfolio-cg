import '../css/Footer.css'
import React, { PureComponent } from 'react'
import Scroll, { Link } from 'react-scroll'

export default class Footer extends PureComponent {
  render () {
    const { linkAnimationProps } = this.props
    return (
      <footer>
        <Link to="photo-me" { ...linkAnimationProps }><button>Back Up ⇧</button></Link>
        <br/>
        <img src="src/client/favicon/mstile-150x150.png" />
      </footer>
    )
  }
}
