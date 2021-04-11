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
    <div className = 'background'>
    <div className='heading'>
     <Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <a href = 'mailto:blucey7@gmail.com?subject=I look forward to hearing from you!' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </a>
     </div>


     <div className = 'image'>
     <p className='text'>
       <br></br>
       Hi, I'm Blake.  I enjoy learning and have many different interests but my main pursuits include coding, exercising, and reading.
       <br></br>
       <br></br>
       Regarding my career, I'm mainly interested in frontend web development with react.js and backend web development/data science involving Python/R.

       <br></br>
       <br></br>
       I find exercising incredibly relaxing, and a very rewarding way to take care of myself.  I love being outdoors, working-out, and enjoying the sunshine.
       <br></br>
       <br></br>
       I'm deeply passionate about reading books that allow me to further my understanding of the world.
       Some books that I've recently enjoyed include: 'The Coddling of the American Mind', 'Capitalism in America', and 'The Strange Death of Europe.'
     </p>
     <br></br>
     <br></br>
     <br></br>
     <a href = 'mailto:blucey7@gmail.com?subject=I look forward to hearing from you!' className = 'Link'><img className = 'me' src ='/linkedinProfile.jpg' alt = 'me' ></img></a>
   </div>

     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <a href = '/programming_résumé.pdf' className = 'Link'><FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/></a>
     </div>

     </div>
  );
};

export default About;
