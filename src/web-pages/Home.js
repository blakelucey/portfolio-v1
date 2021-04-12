import './landingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
//import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'



/*<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>*/

function Home() {
  return (

    <div className = 'background'>
    <div className='heading'>
     <Button variant = 'dark'><Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link></Button>
     <Button variant = 'dark'><Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link></Button>
     <Button variant = 'dark'><Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link></Button>
     <Button variant = 'dark'><a href = 'mailto:blucey7@gmail.com?subject=I look forward to hearing from you!' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </a></Button>
     </div>
<Jumbotron>
<div className = 'Jumbotron-container'>
     <h1 className = 'intro'>
     My name's Blake, it's nice to meet you.
     </h1>
     <br></br>

     <p className = 'intro-2'>
     I'm an aspiring software engineer, self-taught programmer, and a Team Lead in the field of Healthcare.
     </p>
     </div>

</Jumbotron>



     <div id='SocialIcons'>
     <Button variant ='dark'><a href = 'https://github.com/blakelucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a></Button>
     <Button variant = 'dark'><a href = 'https://www.linkedin.com/in/blake-lucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a></Button>
     <Button variant = 'dark'><a href = 'https://www.dropbox.com/s/9sikf9phf06qwyu/programming_r%C3%A9sum%C3%A9.pdf?dl=0' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/></a></Button>
     </div>
     </div>





  );
}

export default Home;
