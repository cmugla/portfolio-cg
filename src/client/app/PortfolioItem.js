import React, { Component } from 'react'
import classNames from 'classnames'
import getData from '../data/getData.js'

class PortfolioItem extends Component {
  state = {
    isOpen: false,
    subGallery: null,
  }

  componentDidMount = () => {
    if (this.props.subGalleryId) {
      const subGallery = this.getData(subGalleryId)
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

  render() {
    const { title, desc, thumbnailSrc, tech, limits, githubLink, projectLink, projectLinkText, parent, subGalleryClass } = this.props
    const { isOpen, subGallery } = this.state

    return (
      <li onClick={this.handleOpen}>
        <img className="each" src={thumbnailSrc} alt="" /><br/>
        {title}<br/>
        <em>{desc}</em>
        <div className={classNames('technologies', { bye: !isOpen })}>
          <p><strong>Technologies: </strong>{tech}</p>
          <p><strong>Limitations: </strong>{limits}</p>
          <a href={githubLink} target="_blank">See some code</a>
          {
            projectLink
            &&
            <a href={projectLink} target="_blank">{projectLinkText ? projectLinkText : 'Open App'}</a>
          }
          {
            subGallery
            &&
            <ul className={classNames('sub-gallery', { [subGalleryClass]: !!subGalleryClass })}>
            {
              subGallery.map(each => (
                <li>
                  {each.desc}<br/>
                  <img src={each.image} alt=""/>
                </li>
              ))
            }
            </ul>
          }
        </div>
        <Link to={parent} ><button onClick={this.handleClose} className="close-project">Close</button></Link>
      </li>
    )
  }
}

export default PortfolioItem
