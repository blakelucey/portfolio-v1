import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className = 'background'>
    <div className='heading'>
     <Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <Link to ='/Contact' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </Link>
     </div>

     <div className = 'projects'>
       <br></br>
     <div className='project-1'>
       <a href = 'https://nervous-elion-aaee65.netlify.app/' id='Random-Quote-Machine'><img id = 'quotes-gif' src = '/img/random-quotes.gif' alt = 'random quote machine gif'></img></a>
         <div className = 'project-1-text'>
   <h1 id = 'quote-title'>Random Quote Machine</h1>
     <h2 id = 'quote-description'>A simple web app to provide users with a random quote, and the means to share that quote to Instagram and Twitter.</h2>
    <a href = 'https://github.com/blakelucey/Random_Quote_Generator' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>
   <h3 id = 'tech-used-1'>React.js</h3>
   </div>
 </div>


     <div className = 'project-2'>
       <a href = 'https://affectionate-tereshkova-098232.netlify.app/' id ='Markdown Previewer'><img id = 'markdown-gif' src = '/img/markdown-gif.gif' alt = 'markdown previewer gif'></img></a>
      <div className = 'project-2-text'>
        <br></br>
        <h1 id = 'markdown-title'>Markdown Previewer</h1>
        <h2 id ='markdown-description'>A web application that allows users to view Markdown syntax before writing it out.  This application also provides a preview window.</h2>
        <br></br>
        <br></br>
        <a href = 'https://github.com/blakelucey/Markdown-Previewer' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>
        <h3 id = 'tech-used-2'>React.js, Bootstrap, Github Flavored Markdown</h3>
        </div>
 </div>

     <div className = 'project-3'>
       <a href =  'https://dreamy-banach-11c214.netlify.app/' id = 'Drum Machine'><img id = 'drum-gif' src = '/img/drum-gif.gif' alt = 'Drum Machine gif'></img></a>
       <div className = 'project-3-text'>
         <br></br>
         <h1 id = 'drum-title'>Drum Machine</h1>
         <h2 id = 'drum-description'>A web application that plays audio when a user presses a drumpad on the screen or presses one of the corresponding keys on their keyboard.</h2>
         <br></br>
         <br></br>
        <a href = 'https://github.com/blakelucey/Drum-Machine' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>

         <h3 id = 'tech-used-3'>React.js, Source of audio Amazon AWS</h3>

       </div>
     </div>
   </div>



     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/>
     </div>

     </div>
  );
};

export default Projects;
