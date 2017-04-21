import React, { PureComponent } from 'react'
import Scroll, { Link } from 'react-scroll'

export default class Footer extends PureComponent {
  render () {
    return (
      <footer>
        <Link name="photo-me" { ...linkAnimationProps }><button>Back Up ⇧</button></Link>
        <img src="src/client/favicon/mstile-150x150.png" />
      </footer>
    )
  }
}
