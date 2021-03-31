import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
    <div className='heading'>
     <Link to ='/'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <Link to ='/Contact'><FontAwesomeIcon icon={faAddressCard} size='4x' className='ContactIcon'/> </Link>
     </div>

     <h1 className='intro'>
     This is the Projects Page
     </h1>
     <p className='intro2'>I'm an aspiring software engineer, self-taught programmer, and a Team Lead in the field of Healthcare.
     </p>


     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/>
     </div>

     </div>
  );
};

export default Projects;
