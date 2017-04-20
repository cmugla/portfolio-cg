import React, { PureComponent } from 'react'

export default class Work extends PureComponent {
  render () {
    return (
      <div className="content">
      <ul>
        <li id="photo-me"><img src="src/client/assets/2.jpg" className="circle" /><h2>Making websites and apps for those who need them...</h2>
          <p>Check out <a href="#side-projects">some of my work</a> and feel free to <a href="#contact">reach out</a> if you have a project in mind.</p>
        </li>
        <li id="side-projects"><h2>Dynamic Sites &amp; Web/iOS Apps</h2>
          <p>Using an array of front-end and back-end techonologies, including Javascript/jQuery, React, React Native, EJS, ERB, Node.Js, Ruby on Rails, PSQL, MongoDB, and API's. </p>
          <ul className="gallery">
          
            <li>
              <img className="each" src="src/client/assets/simon-screenshot-2-crop.png" alt="" /><br/>
              Simon<br/>
              <em>memory game w/ audio</em><br/><br/>
              <div className="technologies bye">
                <p><strong>Technologies:</strong> jQuery &amp; synth</p>
                <p><strong>Limitations:</strong> best played in Chrome</p>
                <a href="https://github.com/cmugla/simon-game" target="_blank">See some code!</a><br/>
                <a href="http://cmugla.github.io/simon-game/simon/" target="_blank">Play Game (hint: extra fun for large desktop monitors! Wait for it...)</a>
                {/*<ul className="sub-gallery">
                                  <li id="quick-play">Quick Play:<br/>
                                  <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: auto; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div className='embed-container'><iframe src='http://cmugla.github.io/simon-game/simon/' style='border:0'></iframe></div>
                                  <li>DEMO => Desktop Version:
                                    <div className='embed-container'>
                                      <iframe src='https://www.youtube.com/embed/tnR0WVFMmGM?rel=0&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>
                                    </div>
                                  </li>
                                  <li>DEMO => Mobile/Tablet Version:<br/>
                                    <div className='embed-container'>
                                      <iframe src='https://www.youtube.com/embed/rTS4Nv3pUNg?rel=0&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>
                                    </div>
                                  </li>
                                </ul>*/}
                <a href="#side-projects"><button className="close-project">Close</button></a>
              </div>
            </li>
          
            <li>
              <img className="each" src="src/client/assets/hood-guide-crop.png" alt="" /><br/>
              'Hood Guide<br/>
              <em>web app for those who just moved</em><br/><br/>
              <div className="technologies bye">
                <p><strong>Technologies:</strong> Javascript, NodeJs, EJS, MongoDB, NYTimes API, Yelp API, Eventful API</p>
                <p><strong>Limitations:</strong> best to use Chrome to open</p>
                <p><strong>Login test, use:</strong> email "bear" and password "bear" whose hood is Jamaica, Queens</p>
                <a href="https://hood-guide.herokuapp.com/" target="_blank">Open App</a><br/>
                <a href="https://github.com/cmugla/hood_guide" target="_blank">See some code!</a>
                <ul className="sub-gallery">
                  <li>Homepage<br/>
                    <img src="src/client/assets/hoodguide.png" />
                  </li>
                  <li>'Hood page<br/>
                    <img src="src/client/assets/hoodguide-page.png" />
                  </li>
                  <li>Profile page<br/>
                    <img src="src/client/assets/hoodguide-profile.png" />
                  </li>
                </ul>
                <a href="#side-projects"><button className="close-project">Close</button></a>
              </div>
            </li>
          
            <li>
              <img className="each" src="src/client/assets/kanye-crop.png" alt="" /><br/>
              Do you like it, Kanye?<br/>
              <em>web app for musicians who may question his opinion</em><br/><br/>
              <div className="technologies bye">
                <p><strong>Technologies:</strong> Ruby on Rails, jQuery, Kanye REST Counter API</p>
                <p><strong>Limitations:</strong> best to use in Chrome</p>
                <a href="https://like-it-kanye.herokuapp.com/" target="_blank">Open App</a><br/>
                <a href="https://github.com/cmugla/approve-me-kanye" target="_blank">See some code!</a>
                <ul className="sub-gallery">
                  <li><img src="src/client/assets/kanye.png" /></li>
                  <li><img src="src/client/assets/kanye-disapproves.png" /></li>
                  <li><img src="src/client/assets/kanye-sorta-approves.png" /></li>
                  <li><img src="src/client/assets/kanye-psyched.png" /></li>
                  <li><img src="src/client/assets/kanye-feed.png" /></li>
                </ul>
                <a href="#side-projects"><button className="close-project">Close</button></a>
              </div>
            </li>
          
            <li>
              <img className="each" src="src/client/assets/farmer-crop.png" alt="" /><br/>
              Find Local, NY<br/>
              <em>iOS app for finding farmer's markets in NY</em><br/><br/>
              <div className="technologies bye">
                <p><strong>Technologies:</strong> React Native, Nativebase, NodeJs, PSQL, NY Farmer's Markets API</p>
                <p><strong>Limitations: </strong>Not up on the app store, yet</p>
                <a href="https://github.com/cmugla/farmers-markt-finder" target="_blank">See some code!</a>
                <ul className="sub-gallery farmer">
                  <li>Homepage<br/>
                    <img src="src/client/assets/farmer-home.png" />
                  </li>
                  <li>As a guest, the main feed of markets with an option for searching by zip code<br/>
                    <img src="src/client/assets/farmer-guest-search.png" />
                  </li>
                  <li>When "Show More" is clicked, the posts made by Farmers are shown<br/>
                    <img src="src/client/assets/farmer-guest-posts.png" />
                  </li>
                  <li>Farmers can login<br/>
                    <img src="src/client/assets/farmer-login.png" />
                  </li>
                  <li>If a Farmer is registered at a market, that markets feed is shown in "Feed"
                    <img src="src/client/assets/farmer-feed.png" />
                  </li>
                  <li>Farmers can post updates about any specials they are bringing to their stand<br/>
                    <img src="src/client/assets/farmer-post.png" />
                  </li>
                  <li>If a Farmer wants to find any other farmer's markets, they can search<br/>
                    <img src="src/client/assets/farmer-search.png" />
                  </li>
                  <li>A Farmer's profile shows the Market they belong to and their most recent posts<br/>
                    <img src="src/client/assets/farmer-profile.png" />
                  </li>
                </ul>
                <a href="#side-projects"><button className="close-project">Close</button></a>
              </div>
            </li>
 
            <li><img className="each" src="src/client/assets/CuriousCanuck_header.png" alt="" /><br/>
              Curious Canuck<br/>
              <em>web app for Canadian explorers</em><br/><br/>
              <div className="technologies bye">
                <p><strong>Technologies:</strong> Javascript, NodeJS, ReactJS, PSQL, Tugo API</p>
                <p><strong>Limitations:</strong> Best used in Chrome</p>
                <a href="https://curious-canuck.herokuapp.com/" target="_blank">Open app</a><br/>
                <a href="https://github.com/curious-canuck/curious-canuck-app" target="_blank">See some code!</a>
                <ul className="sub-gallery">
                  <li>Homepage
                    <img src="src/client/assets/CuriousCanuck_Home.png" />
                  </li>
                  <li>Search, as a guest
                    <img src="src/client/assets/CuriousCanuck_SearchResult.png" />
                  </li>
                  <li>Search and comment, as a user
                    <img src="src/client/assets/CuriousCanuck_User.png" alt="" />
                  </li>
                </ul>
                <a href="#side-projects"><button className="close-project">Close</button></a>
              </div>
            </li>
          </ul>
        </li>
        <li id="recent"><h2>Static Websites</h2>
          <p>Informational websites built for small businesses in various industries. While designing, I have a heavy focus on content strategy and web performance, in order to enhance the user experience and display the brand identity in a clear and concise way.</p>
          <ul className="gallery">
            <li><a href="http://flowersonthevineyard.com" target="_blank"><img src="src/client/assets/fotv.png" /><br/>Flowers on the Vineyard<br/><em>design &amp; build</em></a></li>
            <li><a href="http://aquadockmv.com" target="_blank"><img src="src/client/assets/aquadock.png" /><br/>Aquamarine Dockbuilders<br/><em>design &amp; build</em></a></li>
            <li><a href="http://mvspearpoints.com" target="_blank"><img src="src/client/assets/mvspearpoint.png" /><br/>MV Spearpoints<br/><em>design &amp; build<br/>collaboration with raglan</em></a></li>
            <li><a href="http://thebarnmv.com" target="_blank"><img src="src/client/assets/barnmv.png"/><br/>The Barn, Bowl, and Bistro<br/><em>design &amp; build<br/>collaboration with raglan</em></a></li>
            <li><a href="http://majicmv.com" target="_blank"><img src="src/client/assets/majicmv.png" /><br/>Majic Yacht Charters<br/><em>design &amp; build</em></a></li>
            <li><a href="http://exovault.com" target="_blank"><img src="src/client/assets/exovault.png" /><br/>EXOvault<br/><em>design &amp; build<br/>collaboration with raglan</em></a></li>
          </ul>
        </li>
        <li id="contact"><h2>Get in touch</h2>
          <ul className="list">
            <li><h3><a name="email" href="mailto:hello@celesteglavin.com?Subject=Hello%20(from%20the%20website)">hello@celesteglavin.com</a></h3></li>
            <li><a name="linkedin" href="https://www.linkedin.com/in/celeste-glavin-1702912a" target="_blank">LinkedIn</a></li>
          </ul>
        </li>
        <li><h2>Online Portfolios</h2>
          <ul className="list">
            <li><a name="GitHub" href="https://github.com/cmugla" target="_blank">GitHub<br/><em>explore more fun coding/web projects</em></a></li>
            <li><a name="behance" href="https://www.behance.net/celesteglavin" target="_blank">Behance<br/><em>product, furniture, conceptual, sculptural</em></a></li>
          </ul>
        </li>
        <li id="friends"><h2>Shout Outs...</h2>
          <p>some projects from friends and family whom I have worked closely with</p><br/>
          <ul className="list">
            <li><a name="texel" href="http://texelnetworks.net/" target="_blank">Texel Networks, Inc<br/><em>Domain management and hosting services, Martha's Vineyard</em></a></li>
            <li><a name="raglan" href="http://raglan.nyc/" target="_blank">raglan<br/><em>Collaborative design and development firm, NYC</em></a></li>
            <li><a name="deca" href="http://decae.com/" target="_blank">DECA, Inc.<br/><em>Design-build firm, Martha's Vineyard</em></a></li>
            <li><a name="ben" href="https://constantsmilesmusic.com/" target="_blank">Constant Smiles Music<br/><em>Musician and music lover, Earth</em></a></li>
            <li><a name="wvvy" href="http://wvvy.org/" target="_blank">wVvy 96.7 lpfm<br/><em>Martha's Vineyard Community Radio</em></a></li>
            <li><a name="peacegate" href="http://peacegate.org/" target="_blank">Peacegate DOJO<br/><em>sacred hall of learning, Martha's Vineyard</em></a></li>
          </ul>
        </li>
        <a href="#photo-me"><button>Back Up ⇧</button></a>
      </ul>
    </div>
    )
  }
}