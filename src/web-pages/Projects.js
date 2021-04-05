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
       <h1 className = 'title'><u>Projects</u></h1>
     <div className='project-1'>
     <a href = 'https://nervous-elion-aaee65.netlify.app/' id='Random-Quote-Machine'><img id = 'quotes-gif' src = '/img/random-quotes.gif' alt = 'random quote machine gif'></img></a>
   </div>

     <div className = 'project-2'>
       <a href = 'https://affectionate-tereshkova-098232.netlify.app/' id ='Markdown Previewer'><img id = 'markdown-gif' src = '/img/markdown-gif.gif' alt = 'markdown previewer gif'></img></a>
     </div>

     <div className = 'project-3'>
       <a href =  'https://dreamy-banach-11c214.netlify.app/' id = 'Drum Machine'><img id = 'drum-gif' src = '/img/drum-gif.gif' alt = 'Drum Machine gif'></img></a>

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
