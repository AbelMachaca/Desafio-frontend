import {
  TwitterLogo,
  DribbbleLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";
import "./Footer.css";

const info = [
  {
    personalName: "Abel Machaca",
    cv: "https://drive.google.com/file/d/1z1eBL0ysi_72gM1OTwPWSCowo-5kqS7S/view?usp=sharing",
    email: "abelmachaca99@gmail.com",
    linkedIn: "https://www.linkedin.com/in/abelmachaca/",
    github: "https://github.com/AbelMachaca",
  },
];

const Footer = () => {
  return (
    <div className={`containerFot ${"position-relative w-100 "}`}>
      <footer className={`footerContainer ${"d-flex justify-content-between "}`}>
        <div className={`info ${"d-flex flex-column w-100"}`}>
          <p className="title">compleet labs</p>
          <p className="description">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
            nulla.
          </p>
          <div className={`socials ${"d-flex align-items-center"}`}>
            <figure className="socialIcon">
              <TwitterLogo size={32} weight="fill" />
            </figure>

            <figure className="socialIcon" >
              <DribbbleLogo size={32}  />
            </figure>
            <figure className="socialIcon" >
              <FacebookLogo size={32} weight="fill" />
            </figure>
            <figure className="socialIcon">
              <InstagramLogo size={32} />
            </figure>
          </div>
        </div>

        <div className={"d-flex justify-content-between w-100"}>
          <span className="d-flex flex-column align-items-center justify-content-center">
            <p>Sitemap</p>
            <ul className="d-flex flex-column">
              <li >
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#technology">Technology</a>
              </li>
              <li >
                <a href="#services">Services</a>
              </li>
              <li >
                <a href="#about">About</a>
              </li>
            </ul>
          </span>

          <span className="d-flex flex-column align-items-center justify-content-center ">
            <p className="case caseStudies">Case studies</p>
            <ul className="d-flex flex-column " >
              <li className="disabled">Swiss Airlines</li>
              <li className="disabled">Google</li>
              <li className="disabled">Apple</li>
              <li className="disabled">Nike</li>
            </ul>
          </span>

          <span  className=" d-flex Contact flex-column align-items-center justify-content-center " >
            <p className="case">Contact me</p>
            <ul  className=" d-flex flex-column ">
              <li >
                <a  href={`mailto:${info[0].email}`}>Email</a>
              </li>
              
              <li>
                <a href={info[0].linkedIn} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={info[0].github} target="_blank" rel="noopener noreferrer"> Github</a>
              </li>
              <li>
                <a href={info[0].cv} target="_blank" rel= "noopener noreferrer">
                  Cv
                </a>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
