import React, { Component } from 'react'
import Scroll, { Element, scroller, Link } from 'react-scroll'

import PortfolioItem from './PortfolioItem.js'

class Content extends Component {
  render () {
    const linkAnimationProps = {
      smooth: true,
      offset: 50,
      duration: 500, 
      delay: 1000,
      activeClass: 'active',
    }

    return (
      <div className="content">
        <Element name="photo-me">
          <img src="src/client/assets/2.jpg" className="circle" />
          <h2>Making websites and apps for those who need them...</h2>
          <p>Check out <Link to="side-projects" { ...linkAnimationProps }>some of my work</Link> and feel free to <Link to="contact" { ...linkAnimationProps }>reach out</Link> if you have a project in mind.</p>
        </Element>
        <Element name="side-projects">
          <h2>Dynamic Sites &amp; Web/iOS Apps</h2>
          <p>Using an array of front-end and back-end techonologies, including Javascript/jQuery, React, React Native, EJS, ERB, Node.Js, Ruby on Rails, PSQL, MongoDB, and API's. </p>
          <ul className="gallery">
            <PortfolioItem
              title="Simon"
              desc="memory game w/ audio"
              thumbnailSrc="src/client/assets/simon-screenshot-2-crop.png"
              tech="jQuery &amp; synth"
              limits="best played in Chrome"
              githubLink="https://github.com/cmugla/simon-game"
              projectLink="http://cmugla.github.io/simon-game/simon/"
              projectLinkText="Play Game (hint: extra fun for large desktop monitors! Wait for it...)"
              parent="side-projects"
            />
            <PortfolioItem
              title="'Hood Guide"
              desc="web app for those who just moved"
              thumbnailSrc="src/client/assets/hood-guide-crop.png"
              tech="Javascript, NodeJs, EJS, MongoDB, NYTimes API, Yelp API, Eventful API"
              limits="best to use Chrome to open"
              githubLink="https://github.com/cmugla/hood_guide"
              projectLink="https://hood-guide.herokuapp.com/"
              projectLinkText="Open App"
              parent="side-projects"
              subGalleryId='hood-guide'
            />
            <PortfolioItem
              title="Do you like it, Kanye?"
              desc="web app for musicians who may question his opinion"
              thumbnailSrc="src/client/assets/kanye-crop.png"
              tech="Ruby on Rails, jQuery, Kanye REST Counter API"
              limits="best to use in Chrome"
              githubLink="https://github.com/cmugla/approve-me-kanye"
              projectLink="https://like-it-kanye.herokuapp.com/"
              projectLinkText="Open App"
              parent="side-projects"
              subGalleryId='approve-me-kanye'
            />
            <PortfolioItem
              title="Find Local, NY"
              desc="iOS app for finding farmer's markets in NY"
              thumbnailSrc="src/client/assets/farmer-crop.png"
              tech="React Native, Nativebase, NodeJs, PSQL, NY Farmer's Markets API"
              limits="Not up on the app store, yet"
              githubLink="https://github.com/cmugla/farmers-markt-finder"
              projectLink={null}
              projectLinkText=""
              parent="side-projects"
              subGalleryId='farmers-markt-finder'
              subGalleryClass="farmer"
            />
            <PortfolioItem
              title="Curious Canuck"
              desc="web app for Canadian explorers"
              thumbnailSrc="src/client/assets/CuriousCanuck_header.png"
              tech="Javascript, NodeJS, ReactJS, PSQL, Tugo API"
              limits="Best used in Chrome"
              githubLink="https://github.com/curious-canuck/curious-canuck-app"
              projectLink="https://curious-canuck.herokuapp.com/"
              projectLinkText="Open App"
              parent="side-projects"
              subGalleryId='curious-canuck'
            />
          </ul>
        </Element>
        <Element name="recent">
          <ul className="gallery">
            <PortfolioItem
              title="Flowers on the Vineyard"
              desc="design &amp; build"
              thumbnailSrc="src/client/assets/fotv.png"
              projectLink="http://flowersonthevineyard.com"
              parent="recent"
            />
            <PortfolioItem
              title="Aquamarine Dockbuilders"
              desc="design &amp; build"
              thumbnailSrc="src/client/assets/aquadock.png"
              projectLink="http://aquadockmv.com"
              parent="recent"
            />
            <PortfolioItem
              title="MV Spearpoints"
              desc="design &amp; build"
              subDesc="collaboration with raglan"
              thumbnailSrc="src/client/assets/mvspearpoint.png"
              projectLink="http://mvspearpoints.com"
              parent="recent"
            />
            <PortfolioItem
              title="The Barn, Bowl, and Bistro"
              desc="design &amp; build"
              subDesc="collaboration with raglan"
              thumbnailSrc="src/client/assets/barnmv.png"
              projectLink="http://thebarnmv.com"
              parent="recent"
            />
            <PortfolioItem
              title="Majic Yacht Charters"
              desc="design &amp; build"
              thumbnailSrc="src/client/assets/majicmv.png"
              projectLink="http://majicmv.com"
              parent="recent"
            />
            <PortfolioItem
              title="EXOvault"
              desc="design &amp; build"
              subDesc="collaboration with raglan"
              thumbnailSrc="src/client/assets/exovault.png"
              projectLink="http://exovault.com"
              parent="recent"
            />
          </ul>
        </Element>
        <Element name="contact">
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