import React, { Component } from 'react'
import classNames from 'classnames'
import Scroll, { Link } from 'react-scroll'

class PortfolioItem extends Component {
  state = {
    isOpen: false,
    subGallery: null,
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
    const { item, parent } = this.props
    const { isOpen, subGallery } = this.state

    return (
      <li className={classNames('portfolio-item', { 'show-project': isOpen })} onClick={item.subGallery ? this.handleOpen : this.goToProjectLink}>
        <img className="each thumbnail-img" src={thumbnailSrc} alt="" /><br/>
        {item.title}<br/>
        <em>{item.desc}</em>
        <div className={classNames('technologies', { bye: !isOpen })}>
          <p><strong>Technologies: </strong>{item.tech}</p>
          <p><strong>Limitations: </strong>{item.limits}</p>
          {
            item.links
            &&
            item.links.map(link => {
              if(link.goTo) {
                return (
                  <a ref={node => { this.projectLink = node }} href={link.url} target="_blank">{link.text}</a>
                )
              }
              return (
                <a href={link.url} target="_blank">{link.text}</a>
              )
            })
          }
          {
            item.subGallery
            &&
            <ul className={classNames('sub-gallery', { [subGalleryClass]: !!subGalleryClass })}>
              {
                irem.subGallery.map((each, i) => (
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
