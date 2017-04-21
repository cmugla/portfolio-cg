import React, { PureComponent } from 'react'
import Scroll, { Element } from 'react-scroll'

class ShoutOuts extends PureComponent {
  render () {
    return (
      <Element name="friends">
      	<h2>Shout Outs...</h2>
	      <p>some projects from friends and family whom I have worked closely with</p><br/>
	      <ul className="list">
	        <li><a name="texel" href="http://texelnetworks.net/" target="_blank">Texel Networks, Inc<br/><em>Domain management and hosting services, Martha's Vineyard</em></a></li>
	        <li><a name="raglan" href="http://raglan.nyc/" target="_blank">raglan<br/><em>Collaborative design and development firm, NYC</em></a></li>
	        <li><a name="deca" href="http://decae.com/" target="_blank">DECA, Inc.<br/><em>Design-build firm, Martha's Vineyard</em></a></li>
	        <li><a name="ben" href="https://constantsmilesmusic.com/" target="_blank">Constant Smiles Music<br/><em>Musician and music lover, Earth</em></a></li>
	        <li><a name="wvvy" href="http://wvvy.org/" target="_blank">wVvy 96.7 lpfm<br/><em>Martha's Vineyard Community Radio</em></a></li>
	        <li><a name="peacegate" href="http://peacegate.org/" target="_blank">Peacegate DOJO<br/><em>sacred hall of learning, Martha's Vineyard</em></a></li>
	      </ul>
      </Element>
    )
  }
}

export default ShoutOuts
