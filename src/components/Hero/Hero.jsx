import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import "./Hero.css"; 

const Hero = () => {
  return (
    <div className="containerHero position-relative w-100 d-flex flex-column" id="home">
      <section className="header d-flex flex-column">
        <h2 className="text-white fs-48px w-100 fw-normal">We build beautiful and reliable web solutions</h2>
        <p>
          We strongly believe that communication, trust and transparency are the
          essential elements of successful business relationship. Ready for the
          journey?
        </p>
      </section>
      <div className="buttonsHeader">
        <button className="learnHero">Learn more</button>
        <button className="projectsHero">
          Our projects <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
