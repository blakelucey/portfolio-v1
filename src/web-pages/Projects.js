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
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'



const Projects = () => {
  return (
    <div className = 'background'>
    <div className='heading'>
     <Button variant = 'dark'><Link to ='/' className = 'Link'><FontAwesomeIcon icon={faHome} size = '4x' className='HomeIcon'/></Link></Button>
     <Button variant = 'dark'><Link to ='/About' className = 'Link'><FontAwesomeIcon icon={faQuestionCircle} size = '4x' className='AboutIcon'/> </Link></Button>
     <Button variant = 'dark'><Link to ='/Projects' className = 'Link'><FontAwesomeIcon icon={faTasks} size = '4x' className='ProjectsIcon'/> </Link></Button>
     <Button variant = 'dark'><a href = 'mailto:blucey7@gmail.com?subject=I look forward to hearing from you!' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </a></Button>
     </div>
<div className = 'container'>
     <Carousel controls = {true} pause = {'hover'} indicators = {false}>
       <Carousel.Item>
         <a href = 'https://nervous-elion-aaee65.netlify.app/' target = 'blank' className="d-block w-100"
><Image src = '/random-quotes.gif' alt = 'random quote machine gif' thumbnail id ='quotes-gif'></Image></a>
          <Carousel.Caption class = 'text-center'>
            <h1><u>Random Quote Machine</u></h1>
            <p id = 'text' class = 'lead'>A simple web app to provide users with a random quote, and the means to share that quote to Twitter.</p>
            <h4 id = 'text'>React.js, Github, Gist, Font-Awesome</h4>
              <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/Random_Quote_Generator' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></Button>
          </Carousel.Caption>
        </Carousel.Item>

<Carousel.Item>
       <a href = 'https://affectionate-tereshkova-098232.netlify.app/' target = 'blank'className="d-block w-100"><Image src = '/markdown-gif.gif' alt = 'markdown previewer gif' thumbnail id = 'markdown-gif'></Image></a>
       <Carousel.Caption class = 'text-center'>
        <h1><u>Markdown Previewer</u></h1>
        <p id = 'text' class = 'lead'>A web application that allows users to view Markdown syntax before writing it out.  This application also provides a preview window.</p>
          <h4 id = 'text'>React.js, Bootstrap, Github Flavored Markdown</h4>
      <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/Markdown-Previewer' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></Button>
        </Carousel.Caption>
 </Carousel.Item>

<Carousel.Item>
       <a href =  'https://dreamy-banach-11c214.netlify.app/' target = 'blank'className="d-block w-100"><Image src = '/drum-gif.gif' alt = 'Drum Machine gif' thumbnail id = 'drum-gif'></Image></a>
       <Carousel.Caption class = 'text-center'>
         <h1><u>Drum Machine</u></h1>
         <p id = 'text' class = 'lead'>A web application that plays audio when a user presses a drumpad on the screen or presses one of the corresponding keys on their keyboard.</p>
           <h4 id = 'text'>React.js, Source of audio Amazon AWS</h4>
      <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/Drum-Machine' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></Button>
       </Carousel.Caption>
     </Carousel.Item>

  <Carousel.Item>
            <a href =  'https://happy-murdock-8521d6.netlify.app/' target = 'blank'className="d-block w-100"><Image src = '/calc.gif' alt = 'Calculator gif' thumbnail id = 'calculator-gif'></Image></a>
            <Carousel.Caption class = 'text-center'>
              <h1><u>React Calculator</u></h1>
              <p id = 'text' class = 'lead'>A web application/calculator similar to the calculator on apple devices.</p>
                <h4 id = 'text'>React.js, Math.js, heropatterns</h4>
           <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/react-calculator' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></Button>
            </Carousel.Caption>
          </Carousel.Item>

<Carousel.Item>
       <Image src = '/efficientfrontier.png' alt = 'financial analysis capstone efficient frontier' className="d-block w-100" thumbnail id = 'FA-img'></Image>
       <Carousel.Caption class = 'text-center'>
         <h1><u>Financial Analysis Capstone</u></h1>
         <p id = 'text' class = 'lead'>Analyzed a portfolio consisting of five stocks.  Calculated and plotted key financial statistics.  Optimized the portfolio using the efficient frontier.</p>
           <h4 id = 'text'>Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, CVXOPT.</h4>
      <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/Financial_Analysis_Capstone' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></Button>
      </Carousel.Caption>
</Carousel.Item>

     <Carousel.Item>
       <Image src = '/machine.png' alt = 'Machine Learning capstone graph' className="d-block w-100" thumbnail id = 'ML-img'></Image>
       <Carousel.Caption class = 'text-center'>
         <h1><u>Machine Learning Capstone</u></h1>
         <p id = 'text' class = 'lead'>Explored, augmented, and derived questions from a dataset.  I tested my hypothesis via K Nearest Neighbors Classification/Regression, Random Forest Classification, and Logistic Regression.</p>
           <h4 id = 'text'>Python, Jupyter Notebook, Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn.</h4>
    <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/ML-Capstone' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' id = 'ML-link'/></Button>
      </Carousel.Caption>
    </Carousel.Item>

     <Carousel.Item>
       <Image src = '/DA-img.png' alt = 'Data Analysis Capstone' className="d-block w-100" thumbnail id = 'DA-img'></Image>
       <Carousel.Caption class = 'text-center'>
         <h1><u>Data Analysis Capstone</u></h1>
         <p id = 'text' class = 'lead'>Conducted an AB test based on potential Gym members who had received a fitness test before signing up for a membership.
             I then used this information to determine whether the fitness test was effective in increasing the membership rate.</p>
             <h4 id = 'text'>Python, SQLite, Jupyter Notebook, SciPy, Pandas, Matplotlib</h4>
         <Button variant = 'dark' size = 'lg' block href = 'https://github.com/blakelucey/Data_Analysis_Capstone' target = 'blank'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' id = 'ML-link'/></Button>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 </div>




     <div id='SocialIcons'>
       <Button variant = 'dark'><a href = 'https://github.com/blakelucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a></Button>
       <Button variant = 'dark'><a href = 'https://www.linkedin.com/in/blake-lucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a></Button>
      <Button variant = 'dark'> <a href = 'https://www.dropbox.com/home?preview=r%C3%A9sum%C3%A9.pdf' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/></a></Button>
     </div>

     </div>
  );
};

export default Projects;
