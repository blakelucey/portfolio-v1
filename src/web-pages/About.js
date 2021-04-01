import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
    <div className='heading'>
     <Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <Link to ='/Contact' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </Link>
     </div>

     <h1 className='title'>
     <u>About</u>
     </h1>
     <div className = 'image'>
     <p className='text'>
       <br></br>
       Hi, I'm Blake.  I enjoy learning and have many different interests but my main pursuits include coding, exercising, and reading.
       <br></br>
       <br></br>
       Regarding my career, I'm mainly interested in frontend web development with react.js and backend web development/data science involving Python/R.

       <br></br>
       <br></br>
       In the context of this website, exercise is a catch-all for activity.  I love being outdoors, working-out, and enjoying the sunshine.
       <br></br>
       <br></br>
       I'm deeply passionate about reading books that allow me to further my understanding of the world.
       Some books that I've recently enjoyed include: <l><i>The Coddling of the American Mind</i>, <i>Capitalism in America</i>, and <i>The Strange Death of Europe</i>.</l>
     </p>
     <img className = 'me' src ='/img/linkedinProfile.jpg' alt = 'me'></img>
   </div>

     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/>
     </div>

     </div>
  );
};

export default About;
