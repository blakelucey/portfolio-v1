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
     <a href = 'mailto:blucey7@gmail.com?subject=I look forward to hearing from you!' className = 'Link'><FontAwesomeIcon icon={faEnvelopeOpenText} size='4x' className='ContactIcon'/> </a>
     </div>

     <div className = 'projects'>
       <br></br>
     <div className='project-1'>
       <a href = 'https://nervous-elion-aaee65.netlify.app/' target = 'blank' id='Random-Quote-Machine'><img id = 'quotes-gif' src = '/random-quotes.gif' alt = 'random quote machine gif'></img></a>
         <div className = 'project-1-text'>
   <h1 id = 'quote-title'>Random Quote Machine</h1>
     <h2 id = 'quote-description'>A simple web app to provide users with a random quote, and the means to share that quote to Instagram and Twitter.</h2>
    <a href = 'https://github.com/blakelucey/Random_Quote_Generator' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>
   <h3 id = 'tech-used-1'>React.js, Github, Gist, Font-Awesome</h3>
   </div>
 </div>


     <div className = 'project-2'>
       <a href = 'https://affectionate-tereshkova-098232.netlify.app/' target = 'blank' id ='Markdown Previewer'><img id = 'markdown-gif' src = '/markdown-gif.gif' alt = 'markdown previewer gif'></img></a>
      <div className = 'project-2-text'>
        <br></br>
        <h1 id = 'markdown-title'>Markdown Previewer</h1>
        <h2 id ='markdown-description'>A web application that allows users to view Markdown syntax before writing it out.  This application also provides a preview window.</h2>
        <br></br>
        <br></br>
        <a href = 'https://github.com/blakelucey/Markdown-Previewer' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>
        <h3 id = 'tech-used-2'>React.js, Bootstrap, Github Flavored Markdown</h3>
        </div>
 </div>

     <div className = 'project-3'>
       <a href =  'https://dreamy-banach-11c214.netlify.app/' target = 'blank' id = 'Drum Machine'><img id = 'drum-gif' src = '/drum-gif.gif' alt = 'Drum Machine gif'></img></a>
       <div className = 'project-3-text'>
         <br></br>
         <h1 id = 'drum-title'>Drum Machine</h1>
         <h2 id = 'drum-description'>A web application that plays audio when a user presses a drumpad on the screen or presses one of the corresponding keys on their keyboard.</h2>
         <br></br>
         <br></br>
        <a href = 'https://github.com/blakelucey/Drum-Machine' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>

         <h3 id = 'tech-used-3'>React.js, Source of audio Amazon AWS</h3>

       </div>
     </div>

     <div className = 'project-4'>
       <img id = 'FA-img' src = '/efficientfrontier.png' alt = 'financial analysis capstone efficient frontier'></img>
       <div className = 'project-4-text'>
         <br></br>
         <h1 id = 'FA-title'>Financial Analysis Capstone</h1>
         <h2 id = 'FA-description'>Analyzed a portfolio consisting of five stocks.  Calculated and plotted key financial statistics.  Optimized the portfolio using the efficient frontier.</h2>
         <br></br>
         <br></br>
        <a href = 'https://github.com/blakelucey/Financial_Analysis_Capstone' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' /></a>
        <h3 id = 'tech-used-4'>Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, CVXOPT.</h3>
       </div>
     </div>

     <div className = 'project-5'>
       <img id = 'ML-img' src = '/machine.png' alt = 'Machine Learning capstone graph'></img>
       <div className = 'project-5-text'>
         <br></br><br></br><br></br>
         <h1 id = 'ML-title'>Machine Learning Capstone</h1>
         <h2 id = 'ML-description'>Explored, augmented, and derived questions from a dataset.  I tested my hypothesis via K Nearest Neighbors Classification/Regression, Random Forest Classification, and Logistic Regression.</h2>
       <br></br>
       <br></br>
      <a href = 'https://github.com/blakelucey/ML-Capstone' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' id = 'ML-link'/></a>
      <h3 id = 'tech-used-5'>Python, Jupyter Notebook, Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn.</h3>
       </div>
       <br></br>
       <br></br>
     </div>

     <div className = 'project-6'>
       <img id = 'DA-img' src = '/DA-img.png' alt = 'Data Analysis Capstone'></img>
       <div className = 'project-6-text'>
         <br></br>
         <h1 id = 'DA-title'>Data Analysis Capstone</h1>
         <h2 id = 'DA-description'>Conducted an AB test based on potential Gym members who had received a fitness test before signing up for a membership.
             I then used this information to determine whether the fitness test was effective in increasing the membership rate.</h2>
           <br></br>
           <br></br>
             <a href = 'https://github.com/blakelucey/Data_Analysis_Capstone' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='2x' className='GitHubIcon' id = 'ML-link'/></a>
             <h3 id = 'tech-used-6'>Python, SQLite, Jupyter Notebook, SciPy, Pandas, Matplotlib</h3>
       </div>
     </div>
   </div>



     <div className='SocialIcons'>
       <a href = 'https://github.com/blakelucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faGithub} size='4x' className='GitHubIcon' /></a>
       <a href = 'https://www.linkedin.com/in/blake-lucey' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faLinkedin} size='4x' className='LinkedInIcon'/></a>
       <a href = './programming_résumé.pdf' target = 'blank' className = 'Link'><FontAwesomeIcon icon={faFilePdf} size='4x' className='PDFIcon'/></a>
     </div>

     </div>
  );
};

export default Projects;
