import "../App.css";
import "./Main.css";
import programmer from "../assets/programmer.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin_c.png";
import upwork from "../assets/upwork_b.png";
import fiverr from "../assets/fiverr.png";
//import curvedLines from "../assets/curved_lines_modified.png";
import WorkCell from "../components/WorkCell";
import NavButton from "../components/NavButton";
import ProjectCard from "../components/ProjectCard";

const Main = () => {
  
  return (
    <div className="Main">
      <div className="TopBar">
        {/*<img className="Logo" src="" alt="Gonsoft"/>*/}
        <div className="Logo">Gonzalo Del Gaudio</div>
        <div className="ButtonBar">
          <NavButton className="RoundedButton" label="Portfolio">Portfolio</NavButton>
          <NavButton className="RoundedButton" label="Blog">Blog</NavButton>
          <NavButton className="RoundedButton" label="Contact">Contact</NavButton>
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
        <h3 className="MyWorkTitle">
          My Recent Work
        </h3>
        <h2>These are some projects I worked on.</h2>
        <div className="ProjectGrid">
          <ProjectCard title="Memories" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-text-shadow.png"></ProjectCard>
          <ProjectCard title="CryptoMarket Simulator" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-9-tipps-background-image-for-text.png"></ProjectCard>
          <ProjectCard title="New Project" imageSrc="https://freefrontend.com/assets/img/css-text-effects/04-11-2022-text-shadow-2.png"></ProjectCard>
        </div>
      </div>

      <div className="CompaniesIWorkedFor">
        <h3 className="MyWorkTitle">
          I'm proud to have collaborated with some awesome companies:
        </h3>
        <div className="CompaniesContainer">
          <img className="CompanyLogo" src="" alt="ACCENTURE"></img>
          <img className="CompanyLogo" src="" alt="Soft R.C."></img>
          <img className="CompanyLogo" src="" alt="PROSEGUR"></img>
          <img className="CompanyLogo" src="" alt="Innobaires"></img>
          <img className="CompanyLogo" src="" alt="FDVSolutions"></img>
          <img className="CompanyLogo" src="" alt="5SEIS"></img>
          <img className="CompanyLogo" src="" alt="INMENTAL"></img>
          <img className="CompanyLogo" src="" alt="Aincrad Tech"></img>
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
