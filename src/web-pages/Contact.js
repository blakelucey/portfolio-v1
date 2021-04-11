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


function Contact() {
  return (
    <div className = 'background'>
    <div className='heading'>
     <Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <Link to ='/Contact' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </Link>
     </div>
<form action='mailto:blucey7@gmail.com' method='get'>
       <div className = 'contact-form'>
     <div className = 'row g-2'>
       <div className = 'col-md'>
         <div className = 'form-floating'>
         <input  type = 'First Name' class = 'form-control' id = 'fName' placeholder='First Name'></input>
         <label for = 'fName'>First Name</label>
         </div>
       </div>
       <div className = 'col-md'>
         <div className = 'form-floating'>
         <input  type = 'Last Name' class = 'form-control' id = 'lName' placeholder='Last Name'></input>
         <label for = 'lName'>Last Name</label>
         </div>
       </div>
     </div>

     <div className = 'row g-2'>
       <div className = 'col-md'>
         <div className = 'form-floating'>
          <input  type="email" class="form-control" id="emailAddress" placeholder="name@example.com"></input>
           <label for="emailAddress">Email</label>
           </div>
         </div>
         <div className = 'col-md'>
           <div className = 'form-floating'>
           <input  type = 'phone' class = 'form-control' id = 'phoneNumber' placeholder='Phone Number'></input>
           <label for = 'phoneNumber'>Phone Number</label>
         </div>
       </div>
     </div>
     <div className = 'form-floating'>
       <textarea className = 'form-control' id = 'Message' placeholder = 'Message'></textarea>
       <label for = 'Message'>Get in touch...</label>
     </div>
     <div className = 'd-grid gap-2'>
         <button  type="submit" class="btn btn-outline-dark btn-lg">Submit</button>
     </div>
   </div>
 </form>

     <div className='SocialIcons'>
       <a href = 'https://github.com/blakelucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
       <a href = 'https://www.linkedin.com/in/blake-lucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
       <a href = 'https://www.dropbox.com/s/9sikf9phf06qwyu/programming_r%C3%A9sum%C3%A9.pdf?dl=0' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/></a>
     </div>

     </div>
  );
};

export default Contact;
