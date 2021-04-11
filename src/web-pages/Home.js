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




function Home() {
  return (
    <div className = 'background'>
    <div className='heading'>
     <Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link>
     <Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link>
     <Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link>
     <a href = 'mailto:blucey7@gmail.com?subject=I look forward to hearing from you!' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </a>
     </div>

     <h1 className='intro'>
     My name's Blake, it's nice to meet you.
     </h1>

     <p className='intro-2'>I'm an aspiring software engineer, self-taught programmer, and a Team Lead in the field of Healthcare.
     </p>




     <div className='SocialIcons'>
     <a href = 'https://github.com/blakelucey' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
     <a href = 'https://www.linkedin.com/in/blake-lucey' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
     <a href = '/programming_résumé.pdf' className = 'Link'><FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/></a>
     </div>

     </div>





  );
}

export default Home;
