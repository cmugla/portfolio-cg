import React, { Component } from 'react'
import classNames from 'classnames'
import Scroll, { Link } from 'react-scroll'
import getData from '../data/getData.js'

class PortfolioItem extends Component {
  state = {
    isOpen: false,
    subGallery: null,
  }

  componentDidMount = () => {
    if (this.props.subGalleryId) {
      const subGallery = getData(this.props.subGalleryId)
      this.setState({ subGallery })
    }
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
    const { title, desc, thumbnailSrc, tech, limits, githubLink, projectLink, projectLinkText, parent, subGalleryId, subGalleryClass, linkAnimationProps } = this.props
    const { isOpen, subGallery } = this.state

    return (
      <li onClick={subGallery ? this.handleOpen : this.goToProjectLink}>
        <img className="each thumbnail-img" src={thumbnailSrc} alt="" /><br/>
        {title}<br/>
        <em>{desc}</em>
        <div className={classNames('technologies', { bye: !isOpen })}>
          <p><strong>Technologies: </strong>{tech}</p>
          <p><strong>Limitations: </strong>{limits}</p>
          <a href={githubLink} target="_blank">See some code</a>
          {
            projectLink
            &&
            <a ref={node => { this.projectLink = node }} href={projectLink} target="_blank">{projectLinkText ? projectLinkText : 'Open App'}</a>
          }
          {
            subGallery
            &&
            <ul className={classNames('sub-gallery', { [subGalleryClass]: !!subGalleryClass })}>
              {
                subGallery.map((each, i) => (
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
