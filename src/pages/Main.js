import "../App.css";
import "./Main.css";

import programmer from "../assets/programmer.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin_c.png";
import upwork from "../assets/upwork_b.png";
import fiverr from "../assets/fiverr.png";

import accenture_logo from "../assets/companies-logos/Accenture-logo.png";
import softrc_logo from "../assets/companies-logos/soft_rc_logo_n.png";
import cinco_seis_logo from "../assets/companies-logos/5seis_verde.jpg";
import inmental_logo from "../assets/companies-logos/inmental_logo.png";
import aincrad_tech_logo from "../assets/companies-logos/aincrad_tech_logo.jpeg";
import prosegur_logo from "../assets/companies-logos/prosegur-logo-2.png";
import innobaires_logo from "../assets/companies-logos/innobaires_logo.png";
import fdvsolutions_logo from "../assets/companies-logos/fdv_solutions.png";


//import curvedLines from "../assets/curved_lines_modified.png";
import WorkCell from "../components/WorkCell";
import NavButton from "../components/NavButton";
import ProjectCard from "../components/ProjectCard";
import Company from "../components/Company";

import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <div className="Main">
      <div className="TopBar">
        {/*<img className="Logo" src="" alt="Gonsoft"/>*/}
        <div className="Logo">Gonzalo Del Gaudio</div>
        <div className="ButtonBar">
          <div className='Lang'>
            <button className='LangButton' onClick={changeLanguage} value='en'>English</button>
            <button className='LangButton' onClick={changeLanguage} value='es'>Español</button>
          </div>
          <NavButton className="RoundedButton" label={t('portfolio')}></NavButton>
          <NavButton className="RoundedButton" label={t('blog')}></NavButton>
          <NavButton className="RoundedButton" label={t('contact')}></NavButton>
        </div>
      </div>

      <div className="Presentation">
        <h1>Fullstack & Video Game Developer</h1>
        <h2>I make things work and move smoothly.</h2>
        <div className="PhotoBackground">
          <div className="PhotoBackgroundFace">
            <img src={programmer} className="Photo" alt="logo" />
            <div className="PhotoBackgroundLaptop"></div>
          </div>
        </div>

        <div className="PresentationAbstractImage">
        </div>
      </div>

      <div className="FirstSomeWords">
        <h3 className="MyName">Hi, I'm Gonzalo. Nice to meet you.</h3>
        <p className="SomeWords">Since beginning my joirney as a freelance Fullstack nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quitely confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
      </div>

      <div className="VerticalFrames">
        <div className="VFrame">
          <img src={programmer} className="VFImage" alt="logo" />
          <div className="VFTitle">Frontend</div>
          <div className="VFBody">I like to code things from scratch, and enjoy bringing ideas to life in the browser</div>
          <div className="Subtitle">Languages & Frameworks</div>
          <div className="VFBody">HTML, CSS, SCSS, Javascript, Typescript, React.js, Vue.js, Node.js</div>
          <div className="Subtitle">Programming tools</div>
          <div className="VFBody">Visual Studio Code, Github, Bitbucket, Bash</div>
        </div>

        <div className="VerticalSeparator"></div>

        <div className="VFrame">
          <img src={programmer} className="VFImage" alt="logo" />
          <div className="VFTitle">Backend</div>
          <div className="VFBody">I am a backend dev. =</div>
          <div className="Subtitle">Languages</div>
          <div className="VFBody">Javascript, Typescript</div>
          <div className="Subtitle">Tools and Frameworks</div>
          <div className="VFBody">Node.js, React.js, Vue.js, MySQL, MongoDB</div>
        </div>

        <div className="VerticalSeparator"></div>

        <div className="VFrame">
          <img src={programmer} className="VFImage" alt="logo" />
          <div className="VFTitle">Video Games</div>
          <div className="VFBody">My passion and the reason I started coding at my 15'</div>
        </div>
      </div>

      <div className="MyWork">
        <div className="MyWorkTitle">
        <h3>
          My Recent Work
        </h3>
        <h2>These are some projects I worked on</h2>
        </div>
        <div className="ProjectGrid">
          <ProjectCard title="Memories" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-text-shadow.png"></ProjectCard>
          <ProjectCard title="CryptoMarket Simulator" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-9-tipps-background-image-for-text.png"></ProjectCard>
          <ProjectCard title="New Project" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-text-shadow-2.png"></ProjectCard>
          <ProjectCard title="Galuxian WIP" imageSrc=""></ProjectCard>
          <ProjectCard title="Truco Online WIP" imageSrc=""></ProjectCard>
          <ProjectCard title="" imageSrc=""></ProjectCard>
          <ProjectCard title="" imageSrc=""></ProjectCard>
          <ProjectCard title="" imageSrc=""></ProjectCard>
        </div>
      </div>

      <div className="CompaniesIWorkedFor">
        <h3 className="MyWorkTitle">
          I'm proud to have collaborated with some awesome companies:
        </h3>
        <div className="CompaniesContainer">
          <Company name="" imageSrc={accenture_logo}></Company>
          <Company name="" imageSrc={softrc_logo}></Company>
          <Company name="" imageSrc={prosegur_logo}></Company>
          <Company name="" imageSrc={innobaires_logo}></Company>
          <Company name="" imageSrc={fdvsolutions_logo}></Company>
          <Company name="" imageSrc={cinco_seis_logo}></Company>
          <Company name="Inmental Interactive S.R.L." imageSrc={inmental_logo}></Company>
          <Company name="Aincrad Tech" imageSrc={aincrad_tech_logo}></Company>
        </div>
      </div>

      <div className="FinalWords">
      <img className="LogoWhite" src="" alt="LOGO"></img>
        <div className="SocialNetworkLinks">
          <img className="SNLink" src={linkedin} alt="LinkedIn"></img>
          <img className="SNLink" src={github} alt="Github"></img>
          <img className="UWLink" src={upwork} alt="UpWork"></img>
          <img className="UWLink" src={fiverr} alt="Fiverr"></img>
        </div>
      </div>


    </div>
  );
}

export default Main;
