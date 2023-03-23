import "../App.css";
import "./Main.css";

import programmer from "../assets/icons/programmer.png";
import frontend_icon from "../assets/icons/ux.png";
import frontend_icon_b from "../assets/icons/responsive-design.png";
import backend_icon from "../assets/icons/backend.png";
import backend_icon_b from "../assets/icons/web-settings.png";
import game_icon from "../assets/icons/3d-game.png";

import github from "../assets/social-logos/github.png";
import linkedin from "../assets/social-logos/linkedin_c.png";
import upwork from "../assets/social-logos/upwork_b.png";
import fiverr from "../assets/social-logos/fiverr.png";

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
import { HashLink as Link } from 'react-router-hash-link';

const Main = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const linkedinProfileLink = "https://www.linkedin.com/in/gonzalodelgaudio/";
  const upworkProfileLink = "https://www.upwork.com/freelancers/~015bb5c8a4a1b92f4a";
  const githubProfileLink= "https://github.com/gonherdg";
  const fiverrProfileLink = "https://www.fiverr.com/gonzahdg";

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="App">
      <div className="Main">

        <div className="TopBar">
          {/*<img className="Logo" src="" alt="Gonsoft"/>*/}
          <div className="Logo">Gonzalo Del Gaudio</div>
          <div className="ButtonBar">
            <div className='Lang'>
              <button className='LangButton' onClick={changeLanguage} value='en'>English</button>
              <button className='LangButton' onClick={changeLanguage} value='es'>Español</button>
            </div>
            <NavButton className="RoundedButton" label={t('portfolio')} linkTo="/#portfolio"></NavButton>
            <NavButton className="RoundedButton" label={t('blog')} linkTo="/blog"></NavButton>
            <NavButton className="RoundedButton" label={t('contact')} linkTo="/#contact"></NavButton>
          </div>
        </div>

        <div className="Presentation">
          <h1>{t('title')}</h1>
          <h2>{t('subtitle')}</h2>
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
          <h3 className="MyName">{t('hi')}</h3>
          <p className="SomeWords">{t('description')}</p>
        </div>

        <div className="VerticalFrames">
          <div className="VFrame">
            <img src={frontend_icon_b} className="VFImage" alt="logo" />
            <div className="VFTitle">{t('frontend')}</div>
            <div className="VFBody">{t('frontend-0')}</div>
            <div className="Subtitle">{t('frontend-t1')}</div>
            <div className="VFBody">{t('frontend-1')}</div>
            <div className="Subtitle">{t('frontend-t2')}</div>
            <div className="VFBody">{t('frontend-2')}</div>
          </div>

          <div className="VerticalSeparator"></div>

          <div className="VFrame">
            <img src={backend_icon_b} className="VFImage" alt="logo" />
            <div className="VFTitle">{t('backend')}</div>
            <div className="VFBody">{t('backend-0')}</div>
            <div className="Subtitle">{t('backend-t1')}</div>
            <div className="VFBody">{t('backend-1')}</div>
            <div className="Subtitle">{t('backend-t2')}</div>
            <div className="VFBody">{t('backend-2')}</div>
          </div>

          <div className="VerticalSeparator"></div>

          <div className="VFrame">
            <img src={game_icon} className="VFImage" alt="logo" />
            <div className="VFTitle">{t('videogames')}</div>
            <div className="VFBody">{t('videogames-0')}</div>
            <div className="Subtitle">{t('videogames-t1')}</div>
            <div className="VFBody">{t('videogames-1')}</div>
            <div className="Subtitle">{t('videogames-t2')}</div>
            <div className="VFBody">{t('videogames-2')}</div>
          </div>
        </div>


        <div id="portfolio" className="MyWork">
          <div className="MyWorkTitle">
          <h3>
            {t('mywork')}
          </h3>
          <h2>{t('mywork-sub')}</h2>
          </div>
          <div className="ProjectGrid">
            <ProjectCard title="Memories" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-text-shadow.png"></ProjectCard>
            <ProjectCard title="CryptoMarket Simulator" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-9-tipps-background-image-for-text.png"></ProjectCard>
            <ProjectCard title="New Project" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-text-shadow-2.png"></ProjectCard>
            <ProjectCard title="Galuxian WIP" imageSrc=""></ProjectCard>
            <ProjectCard title="Truco Online WIP" imageSrc=""></ProjectCard>
            <ProjectCard title="Dr. Mario Clone" imageSrc=""></ProjectCard>
            <ProjectCard title="Ruleta" imageSrc=""></ProjectCard>
            <ProjectCard title="Aprendo la hora" imageSrc=""></ProjectCard>
            <ProjectCard title="Word finder" imageSrc=""></ProjectCard>
            <ProjectCard title="Shot in the Dark" imageSrc=""></ProjectCard>
            <ProjectCard title="A las ñapis" imageSrc=""></ProjectCard>
            <ProjectCard title="Siv" imageSrc=""></ProjectCard>
            <ProjectCard title="OpenVoxelEditor" imageSrc=""></ProjectCard>
            <ProjectCard title="B9" imageSrc=""></ProjectCard>
            <ProjectCard title="Tiburon3D" imageSrc=""></ProjectCard>
            <ProjectCard title="Portaloid" imageSrc=""></ProjectCard>
            <ProjectCard title="Tiny Art" imageSrc=""></ProjectCard>
            <ProjectCard title="Mio Kill" imageSrc=""></ProjectCard>
          </div>
        </div>


        <div className="CompaniesIWorkedFor">
          <h3 className="MyWorkTitle">
            {t('companies')}
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


        <div id="contact" className="FinalWords">
          {!
            <h3 className="MyName">{t('get-in-touch')}</h3> &&
            <img className="LogoWhite" src="" alt="LOGO"></img>
          }
          <div className="SocialNetworkLinks">
            <a target="_blank" href={linkedinProfileLink}><img className="UWLink" src={linkedin} alt="LinkedIn" title="LinkedIn"></img></a>
            <a target="_blank" href={githubProfileLink}><img className="SNLink" src={github} alt="Github" title="Github"></img></a>
            <a target="_blank" href={upworkProfileLink}><img className="UWLink" src={upwork} alt="UpWork" title="UpWork"></img></a>
            <a target="_blank" href={fiverrProfileLink}><img className="UWLink" src={fiverr} alt="Fiverr" title="Fiverr"></img></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;
