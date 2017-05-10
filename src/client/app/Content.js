import '../css/Content.css'
import React, { Component } from 'react'
import Scroll, { Element, Link } from 'react-scroll'

import db from '../data/db.js'

import PortfolioItem from './PortfolioItem.js'

class Content extends Component {
  state={}

  handleClose = () => {
    // TODO > UX decision: should this be global and close all open?
    this.setState({ closeContainers: true })
  }

  render () {
    const { linkAnimationProps } = this.props
    console.log(linkAnimationProps)

    return (
      <div className="content">
        <Element name="photo-me" id="photo-me">
          <img src="src/client/assets/2.jpg" className="circle" />
          <h2>Making websites and apps for those who need them...</h2>
          <p>Check out <Link to="side-projects" { ...linkAnimationProps }>some of my work</Link> and feel free to <Link to="contact" { ...linkAnimationProps }>reach out</Link> if you have a project in mind.</p>
        </Element>
        <Element name="side-projects" id="side-projects">
          <h2>Dynamic Sites &amp; Web/iOS Apps</h2>
          <p>Using an array of front-end and back-end techonologies, including Javascript/jQuery, React, React Native, EJS, ERB, Node.Js, Ruby on Rails, PSQL, MongoDB, and API's. </p>
          <ul className="gallery">
            {
              db
              &&
              db.side_projects
              &&
              db.side_projects.map((item, i) => 
                <PortfolioItem
                  key={`side-project-${i}`}
                  item={item}
                  parent="side-projects"
                />
              )
            }
          </ul>
        </Element>
        <Element name="recent" id="recent">
          <h2>Static Websites</h2>
          <p>Informational websites built for small businesses in various industries. While designing, I have a heavy focus on content strategy and web performance, in order to enhance the user experience and display the brand identity in a clear and concise way.</p>
          <ul className="gallery">
            {
              db
              &&
              db.recent
              &&
              db.recent.map((item, i) => 
                <PortfolioItem
                  key={`recent-project-${i}`}
                  item={item}
                  parent="recent"
                />
              )
            }
          </ul>
        </Element>
        <Element name="contact" id="contact">
          <h2>Get in touch</h2>
          <ul className="list">
            <li><h3><a name="email" href="mailto:hello@celesteglavin.com?Subject=Hello%20(from%20the%20website)">hello@celesteglavin.com</a></h3></li>
            <li><a name="linkedin" href="https://www.linkedin.com/in/celeste-glavin-1702912a" target="_blank">LinkedIn</a></li>
          </ul>
        </Element>
        <Element name="online-portfolios">
          <h2>Online Portfolios</h2>
          <ul className="list">
            <li><a name="GitHub" href="https://github.com/cmugla" target="_blank">GitHub<br/><em>explore more fun coding/web projects</em></a></li>
            <li><a name="behance" href="https://www.behance.net/celesteglavin" target="_blank">Behance<br/><em>product, furniture, conceptual, sculptural</em></a></li>
          </ul>
        </Element>
      </div>
    )
  }
}

export default Content