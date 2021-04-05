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
const axios = require('axios').default;



class Contact extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    fName: '',
    lName: '',
    emailAddress: '',
    phoneNumber: '',
    Message: ''
  }
  this.onfNameChange = this.onfNameChange.bind(this);
  this.onlNameChange = this.onlNameChange.bind(this);
  this.onemailAddressChange = this.onemailAddressChange.bind(this);
  this.onphoneNumberChange = this.onphoneNumberChange.bind(this);
  this.onMessageChange = this.onMessageChange.bind(this);
  this.submitEmail = this.submitEmail.bind(this);
  this.resetForm = this.resetForm.bind(this);
}
onfNameChange(event) {
  this.setState({fName: event.target.value})
}
onlNameChange(event) {
  this.setState({lName: event.target.value})
}
onemailAddressChange(event) {
  this.setState({emailAddress: event.target.value})
}
onphoneNumberChange(event) {
  this.setState({phoneNumber: event.target.value})
}
onMessageChange(event) {
  this.setState({Message: event.target.value})
}

submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent.");
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
}
resetForm(){
        this.setState({fName: '', lName: '',emailAddress:'', phoneNumber: '', Message: ''})
}

render(){
  
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
         <input onChange={this.onfNameChange} type = 'First Name' class = 'form-control' id = 'fName' placeholder='Your' value = 'Your'></input>
         <label for = 'fName'>First Name</label>
         </div>
       </div>
       <div className = 'col-md'>
         <div className = 'form-floating'>
         <input onChange={this.onlNameChange} type = 'Last Name' class = 'form-control' id = 'lName' placeholder='Name' value = 'Name'></input>
         <label for = 'lName'>Last Name</label>
         </div>
       </div>
     </div>

     <div className = 'row g-2'>
       <div className = 'col-md'>
         <div className = 'form-floating'>
          <input onChange={this.onemailAddressChange} type="email" class="form-control" id="emailAddress" placeholder="name@example.com" value="you@example.com"></input>
           <label for="emailAddress">Email Address</label>
           </div>
         </div>
         <div className = 'col-md'>
           <div className = 'form-floating'>
           <input onChange={this.onphoneNumberChange} type = 'phone' class = 'form-control' id = 'phoneNumber' placeholder='Your phone number...' value = '111-111-1111'></input>
           <label for = 'phoneNumber'>Phone Number</label>
         </div>
       </div>
     </div>
     <div className = 'form-floating'>
       <textarea onChange={this.onMessageChange} className = 'form-control' placeholder = 'Write your message' id = 'Message' value = 'Get in touch.'></textarea>
       <label for = 'Message'>Message</label>
     </div>
     <div className = 'd-grid gap-2'>
         <button onClick = {this.submitEmail} type="submit" class="btn btn-outline-dark btn-lg">Submit</button>
     </div>
   </div>
 </form>

     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/>
     </div>

     </div>
  );
};
};

export default Contact;
