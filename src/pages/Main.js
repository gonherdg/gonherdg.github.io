import "../App.css";
import "./Main.css";

import React, { useState } from "react";
import DescriptionModal from "../components/DescriptionModal/DescriptionModal.js";

// Misc icons
import programmer from "../assets/icons/programmer.png";
import frontend_icon from "../assets/icons/ux.png";
import frontend_icon_b from "../assets/icons/responsive-design.png";
import backend_icon from "../assets/icons/backend.png";
import backend_icon_b from "../assets/icons/web-settings.png";
import game_icon from "../assets/icons/3d-game.png";

// Social Networks' logos
import github from "../assets/social-logos/github.png";
import linkedin from "../assets/social-logos/linkedin_c.png";
import upwork from "../assets/social-logos/upwork_b.png";
import fiverr from "../assets/social-logos/fiverr.png";

// Company logos
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
import Company from "../components/Company/Company";
import ProjectTypeSelector from "../components/ProjectTypeSelector/ProjectTypeSelector";

import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

const Main = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectTypeSelected, setProjectTypeSelected] = useState("web");

    const linkedinProfileLink = "https://www.linkedin.com/in/gonzalodelgaudio/";
    const upworkProfileLink =
        "https://www.upwork.com/freelancers/~015bb5c8a4a1b92f4a";
    const githubProfileLink = "https://github.com/gonherdg";
    const fiverrProfileLink = "https://www.fiverr.com/gonzahdg";

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
        console.log(i18n.language);
    }

    const openModal = () => {
        console.log("Open modal...");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const projectTypeSelectorHandler = (selected) => {
        setProjectTypeSelected(selected);
    };

    return (
        <div className="App">
            <div className="Main">
                <div className="TopBar">
                    {/*<img className="Logo" src="" alt="Gonsoft"/>*/}
                    <div className="Logo">
                        {false && <img className="SNLink" alt="my_logo" />}
                        Gonzalo
                        <div className="DivName"> Del Gaudio</div>
                    </div>
                    <div className="ButtonBar">
                        <div className="Lang">
                            <button
                                className={`LangButton ${
                                    i18n.language === "en"
                                        ? "ColorHighlightFont"
                                        : ""
                                }`}
                                onClick={changeLanguage}
                                value="en">
                                EN
                            </button>
                            -
                            <button
                                className={`LangButton ${
                                    i18n.language === "es"
                                        ? "ColorHighlightFont"
                                        : ""
                                }`}
                                onClick={changeLanguage}
                                value="es">
                                ES
                            </button>
                        </div>
                        <NavButton
                            className="RoundedButton"
                            label={t("portfolio")}
                            linkTo="/#portfolio"></NavButton>
                        {false && (
                            <NavButton
                                className="RoundedButton"
                                label={t("blog")}
                                linkTo="/blog"></NavButton>
                        )}
                        {false && (
                            <NavButton
                                className="RoundedButton"
                                label={t("resume")}
                                linkTo="/resume"></NavButton>
                        )}
                        <NavButton
                            className="RoundedButton"
                            label={t("contact")}
                            linkTo="/#contact"></NavButton>
                    </div>

                    <div className="Options"></div>
                </div>

                <div className="Presentation">
                    <h1>{t("title")}</h1>
                    <h3 className="Subtitle2">{t("subtitle")}</h3>
                    <div className="PhotoBackground">
                        <div className="PhotoBackgroundFace">
                            <img
                                src={programmer}
                                className="Photo"
                                alt="logo"
                            />
                            <div className="PhotoBackgroundLaptop"></div>
                        </div>
                    </div>

                    <div className="PresentationAbstractImage"></div>
                </div>

                <div className="FirstSomeWords">
                    <h3 className="MyName">{t("hi")}</h3>
                    <p className="SomeWords">{t("description")}</p>
                </div>

                <div className="VerticalFrames">
                    <div className="VFrame">
                        <img
                            src={frontend_icon_b}
                            className="VFImage"
                            alt="logo"
                        />
                        <div className="VFTitle">{t("frontend")}</div>
                        <div className="VFBody">{t("frontend-0")}</div>
                        <div className="Subtitle">{t("frontend-t1")}</div>
                        <div className="VFBody">{t("frontend-1")}</div>
                        <div className="Subtitle">{t("frontend-t2")}</div>
                        <div className="VFBody">{t("frontend-2")}</div>
                    </div>

                    <div className="VerticalSeparator"></div>

                    <div className="VFrame">
                        <img
                            src={backend_icon_b}
                            className="VFImage"
                            alt="logo"
                        />
                        <div className="VFTitle">{t("backend")}</div>
                        <div className="VFBody">{t("backend-0")}</div>
                        <div className="Subtitle">{t("backend-t1")}</div>
                        <div className="VFBody">{t("backend-1")}</div>
                        <div className="Subtitle">{t("backend-t2")}</div>
                        <div className="VFBody">{t("backend-2")}</div>
                    </div>

                    <div className="VerticalSeparator"></div>

                    <div className="VFrame">
                        <img src={game_icon} className="VFImage" alt="logo" />
                        <div className="VFTitle">{t("videogames")}</div>
                        <div className="VFBody">{t("videogames-0")}</div>
                        <div className="Subtitle">{t("videogames-t1")}</div>
                        <div className="VFBody">{t("videogames-1")}</div>
                        <div className="Subtitle">{t("videogames-t2")}</div>
                        <div className="VFBody">{t("videogames-2")}</div>
                    </div>
                </div>

                <div id="portfolio" className="MyWork">
                    <h2 className="MyWorkTitle">{t("mywork")}</h2>
                    <h3 className="MyWorkSubtitle">{t("mywork-sub")}</h3>
                    <ProjectTypeSelector
                        type={projectTypeSelected}
                        onClick={
                            projectTypeSelectorHandler
                        }></ProjectTypeSelector>
                    <div className="ProjectGrid">
                        {/* WEB SECTION */}
                        {projectTypeSelected === "web" && (
                            <>
                                <ProjectCard
                                    title="Social Hub"
                                    imageSrc={socialHub_0}
                                    sourceLink="https://github.com/gonherdg/react-social-hub"
                                    description="Social Hub is a reduced version of any social media app. The purpose of the project is to demonstrate the use of different technologies to create an app that includes a login/logout/signup system with JWT and Google OAuth service, "
                                    techTags="React;Javascript;Github Pages;AWS Lambda;Serverless;NodeJS;ExpressJS"
                                    demoLink="https://socialhub.gonherdg.eu.org"></ProjectCard>
                                <ProjectCard
                                    title="A las ñapis"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags=""></ProjectCard>
                                <ProjectCard
                                    title="Word finder"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags=""></ProjectCard>
                            </>
                        )}

                        {/* MOBILE SECTION */}
                        {projectTypeSelected === "mobile" && (
                            <>
                                <ProjectCard
                                    title="Investor Simulator"
                                    imageSrc={investorSim}
                                    sourceLink="https://github.com/gonherdg/invest-sim-react-native"
                                    description="(Coming soon)"
                                    techTags="React Native"></ProjectCard>
                            </>
                        )}

                        {/* GAME SECTION */}
                        {projectTypeSelected === "games" && (
                            <>
                                <ProjectCard
                                    title="Aprendo la hora"
                                    imageSrc={aprendoLaHora_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title={"PoC:\nProcedural terrain"}
                                    imageSrc={poc_terrain_0}
                                    description=""
                                    techTags="Godot 4"></ProjectCard>
                                <ProjectCard
                                    title={"PoC:\nSpaceship movements"}
                                    imageSrc={poc_avion_0}
                                    description=""
                                    techTags="Godot 4"></ProjectCard>
                                <ProjectCard
                                    title={"PoC:\nPortals"}
                                    imageSrc={poc_portals_0}
                                    description=""
                                    techTags="Godot 4"></ProjectCard>
                                <ProjectCard
                                    title="Memotest"
                                    imageSrc={memo_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Trivia"
                                    imageSrc={trivia_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Puzzle"
                                    imageSrc={puzzle_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Complete the concept"
                                    imageSrc={unir_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Simon"
                                    imageSrc={simon_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Water game"
                                    imageSrc={water_game_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="B9"
                                    imageSrc={b9_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Dr. Mario Clone"
                                    imageSrc={drmarioclone_0}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Shot in the Dark"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Ruleta"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags=""></ProjectCard>
                                <ProjectCard
                                    title="Siv"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Tiburon3D"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Godot 4"></ProjectCard>
                                <ProjectCard
                                    title="Galuxian WIP"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Tiny Art"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Truco Online WIP"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="Mio Kill"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                                <ProjectCard
                                    title="OpenVoxelEditor"
                                    imageSrc={commingSoon}
                                    description=""
                                    techTags="Unity"></ProjectCard>
                            </>
                        )}
                    </div>
                </div>

                <div className="CompaniesIWorkedFor">
                    <h3 className="MyWorkTitle">{t("companies")}</h3>
                    <div className="CompaniesContainer">
                        <Company name="" imageSrc={accenture_logo}></Company>
                        <Company name="" imageSrc={softrc_logo}></Company>
                        <Company name="" imageSrc={prosegur_logo}></Company>
                        <Company name="" imageSrc={innobaires_logo}></Company>
                        <Company name="" imageSrc={fdvsolutions_logo}></Company>
                        <Company name="" imageSrc={cinco_seis_logo}></Company>
                        <Company
                            name="Inmental Interactive S.R.L."
                            imageSrc={inmental_logo}></Company>
                        <Company
                            name="Aincrad Tech"
                            imageSrc={aincrad_tech_logo}></Company>
                    </div>
                </div>

                <div id="contact" className="FinalWords">
                    {!(<h3 className="MyName">{t("get-in-touch")}</h3>) && (
                        <img className="LogoWhite" src="" alt="LOGO"></img>
                    )}
                    <div className="SocialNetworkLinks">
                        <a
                            target="_blank"
                            href={linkedinProfileLink}
                            rel="noreferrer">
                            <img
                                className="UWLink"
                                src={linkedin}
                                alt="LinkedIn"
                                title="My LinkedIn profile"></img>
                        </a>
                        <a
                            target="_blank"
                            href={githubProfileLink}
                            rel="noreferrer">
                            <img
                                className="SNLink"
                                src={github}
                                alt="Github"
                                title="My Github profile"></img>
                        </a>
                        <a
                            target="_blank"
                            href={upworkProfileLink}
                            rel="noreferrer">
                            <img
                                className="UWLink"
                                src={upwork}
                                alt="UpWork"
                                title="My UpWork profile"></img>
                        </a>
                        <a
                            target="_blank"
                            href={fiverrProfileLink}
                            rel="noreferrer">
                            <img
                                className="UWLink"
                                src={fiverr}
                                alt="Fiverr"
                                title="My Fiverr profile"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
