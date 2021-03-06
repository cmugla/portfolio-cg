import React, { Component } from 'react'
import classNames from 'classnames'
import Scroll, { Link } from 'react-scroll'

class PortfolioItem extends Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    // TODO > UX decision: should this be global and close all open?
    this.setState({ isOpen: false })
  }

  goToProjectLink = () => {
    this.projectLink.click()
  }

  render() {
    const { item, parent, linkAnimationProps } = this.props
    const { isOpen } = this.state

    if (!item) {
      return null
    }

    return (
      <li className={classNames('portfolio-item', { 'show-project': isOpen })} onClick={item.subGallery ? this.handleOpen : this.goToProjectLink}>
        <img className="each thumbnail-img" src={item.thumbnailSrc} alt="" /><br/>
        {item.title}<br/>
        <em>{item.desc}</em>
        <div className={classNames('technologies', { bye: !isOpen })}>
          <p><strong>Technologies: </strong>{item.tech}</p>
          <p><strong>Limitations: </strong>{item.limits}</p>
          {
            item.links
            &&
            item.links.map((link, i) => {
              if(link.goTo) {
                return (
                  <span key={`link-${i}`}>
                    <a ref={node => { this.projectLink = node }} href={link.url} target="_blank">{link.text}</a>
                    <br />
                  </span>
                )
              }
              return (
                <span key={`link-${i}`}>
                  <a href={link.url} target="_blank">{link.text}</a>
                  <br />
                </span>
              )
            })
          }
          {
            item.subGallery
            &&
            <ul className={classNames('sub-gallery', { [item.subGalleryClass]: !!item.subGalleryClass })}>
              {
                item.subGallery.map((each, i) => (
                  <li key={`sub-gallery-${i}`}>
                    {each.desc}<br/>
                    <img src={each.image} alt=""/>
                  </li>
                ))
              }
              <Link to={parent} { ...linkAnimationProps } ><button onClick={this.handleClose} className="close-project">Close</button></Link>
            </ul>
          }
        </div>
      </li>
    )
  }
}

export default PortfolioItem
