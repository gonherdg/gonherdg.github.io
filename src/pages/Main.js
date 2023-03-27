import "../App.css";
import "./Main.css";

import React, { useState } from "react";
import DescriptionModal from "../components/DescriptionModal/DescriptionModal.js";

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

// Import assets for showing my work
import commingSoon from "../assets/myprojects/dummy_600x400_ffffff_cccccc_coming-soon.png";
import socialHub_0 from "../assets/myprojects/SocialHub_2.png";
import socialHub_1 from "../assets/myprojects/SocialHub_1.png";
import investorSim from "../assets/myprojects/InvestorSim.png";
import aprendoLaHora_0 from "../assets/myprojects/Aprendo la hora/Aprendo La Hora Mickey InGame.png";
import poc_avion_0 from "../assets/myprojects/PoC Avion/avion-2.jpg";
import poc_portals_0 from "../assets/myprojects/PoC Portales/godot-portaloid-scene-6.jpg";
import poc_terrain_0 from "../assets/myprojects/Terrenos Godot/nivel_pvp.png";
import water_game_0 from "../assets/myprojects/Aysa/aysa_2.jpg";
import b9_0 from "../assets/myprojects/B9/b9-1.jpg";
import drmarioclone_0 from "../assets/myprojects/DrMarioClone/drmario-6.jpg";

import simon_0 from "../assets/myprojects/Minijuegos/simon-0.jpg";
import trivia_0 from "../assets/myprojects/Minijuegos/trivia-0.jpg";
import puzzle_0 from "../assets/myprojects/Minijuegos/puzzle-2.jpg";
import unir_0 from "../assets/myprojects/Minijuegos/unir-1.jpg";
import memo_0 from "../assets/myprojects/Minijuegos/memo-0.jpg";

//import curvedLines from "../assets/curved_lines_modified.png";
import WorkCell from "../components/WorkCell/WorkCell";
import NavButton from "../components/NavButton/NavButton";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Company from "../components/Company";

import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

const Main = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const linkedinProfileLink = "https://www.linkedin.com/in/gonzalodelgaudio/";
  const upworkProfileLink = "https://www.upwork.com/freelancers/~015bb5c8a4a1b92f4a";
  const githubProfileLink= "https://github.com/gonherdg";
  const fiverrProfileLink = "https://www.fiverr.com/gonzahdg";

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  const openModal =  () => {
    console.log("Open modal...")
    setIsModalOpen(true);
  }

  const closeModal = () =>  {
    setIsModalOpen(false);
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
            <ProjectCard title="Social Hub" imageSrc={socialHub_0} sourceLink="https://github.com/gonherdg/react-social-hub" description="(Project description)"></ProjectCard>
            <ProjectCard title="Investor Simulator" imageSrc={investorSim} sourceLink="https://github.com/gonherdg/invest-sim-react-native" description="(Project description)"></ProjectCard>
            <ProjectCard title="Unity: Aprendo la hora" imageSrc={aprendoLaHora_0} description=""></ProjectCard>
            <ProjectCard title={"Godot 4 - PoC:\nProcedural terrain"} imageSrc={poc_terrain_0} description=""></ProjectCard>
            <ProjectCard title={"Godot 4 - PoC:\nSpaceship movements"} imageSrc={poc_avion_0} description=""></ProjectCard>
            <ProjectCard title={"Godot 4 - PoC:\nPortals"} imageSrc={poc_portals_0}></ProjectCard>
            <ProjectCard title="Unity: Memotest" imageSrc={memo_0}></ProjectCard>
            <ProjectCard title="Unity: Trivia" imageSrc={trivia_0}></ProjectCard>
            <ProjectCard title="Unity: Puzzle" imageSrc={puzzle_0}></ProjectCard>
            <ProjectCard title="Unity: Complete the concept" imageSrc={unir_0}></ProjectCard>
            <ProjectCard title="Unity: Simon" imageSrc={simon_0}></ProjectCard>
            <ProjectCard title="Water game" imageSrc={water_game_0}></ProjectCard>
            <ProjectCard title="B9" imageSrc={b9_0}></ProjectCard>
            <ProjectCard title="Dr. Mario Clone" imageSrc={drmarioclone_0}></ProjectCard>
            <ProjectCard title="A las ñapis" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Shot in the Dark" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Ruleta" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Word finder" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Siv" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Tiburon3D" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Galuxian WIP" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Tiny Art" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Truco Online WIP" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="Mio Kill" imageSrc={commingSoon}></ProjectCard>
            <ProjectCard title="OpenVoxelEditor" imageSrc={commingSoon}></ProjectCard>
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
            <a target="_blank" href={linkedinProfileLink}><img className="UWLink" src={linkedin} alt="LinkedIn" title="My LinkedIn profile"></img></a>
            <a target="_blank" href={githubProfileLink}><img className="SNLink" src={github} alt="Github" title="My Github profile"></img></a>
            <a target="_blank" href={upworkProfileLink}><img className="UWLink" src={upwork} alt="UpWork" title="My UpWork profile"></img></a>
            <a target="_blank" href={fiverrProfileLink}><img className="UWLink" src={fiverr} alt="Fiverr" title="My Fiverr profile"></img></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;
