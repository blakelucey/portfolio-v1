import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
    <div className='heading'>
     <Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <Link to ='/Contact' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </Link>
     </div>

     <div>
       <form class = 'form-floating'>
         <input type = 'First Name' class = 'form-control' id = 'fName' placeholder='Your' value = 'Your'></input>
         <label for = 'fName'>First Name</label>

       </form>
       <form class = 'form-floating'>
         <input type = 'Last Name' class = 'form-control' id = 'lName' placeholder='Name' value = 'Name'></input>
         <label for = 'lName'>Last Name</label>

       </form>
       <form class="form-floating">
         <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" value="you@example.com"></input>
           <label for="emailAddress">Email Address</label>
         </form>
         <form class = 'form-floating'>
           <input type = 'phone' class = 'form-control' id = 'phoneNumber' placeholder='Your phone number...' value = '111-111-1111'></input>
           <label for = 'phoneNumber'>Phone Number</label>
         </form>
  </div>

     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/>
     </div>

     </div>
  );
};

export default Contact;
