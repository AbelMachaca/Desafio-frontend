import {
  FileText,
  DesktopTower,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";
import "./ServicesCards.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 500,
  once: true,
  easing: "ease",
});

const ServicesCards = () => {
  return (
    <div className={`containerSCards ${" w-100 d-flex  align-items-center"}`}>
      <div
        className={`servicesCard ${"d-flex flex-column align-items-center justify-content-between bg-white"}`}
        data-aos="fade-up"
      >
        <figure
          className={`servicesIcon ${"d-flex align-items-center justify-content-center p-3"}`}
        >
          <FileText size={32} />
        </figure>
        <h3 className="titleCardServices">Business & Product Concept</h3>
        <p className={`cardTextServices ${"text-center w-100"}`}>
          Analyse business and product concepts at Start-up Workshops or Ongoing
          Projects´ Audits and prepare a viable and sensible product roadmap for
          achieving a perfect market fit.
        </p>
        <LearnMoreButton />
      </div>

      <div
        className={`servicesCard ${"d-flex flex-column align-items-center justify-content-between bg-white"} `}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <figure
          className={`servicesIcon ${"d-flex align-items-center justify-content-center p-3"}`}
        >
          <DesktopTower size={32} />
        </figure>
        <h3 className="titleCardServices">Web & Mobile Development </h3>
        <p className={`cardTextServices ${"text-center w-100"}`}>
          Plan, develop and test high-quality web- applications using AngularJS,
          NodeJS, JavaScript, TypeScript, HTML5 and SASS/CCS3 frameworks and
          native mobile languages.
        </p>
        <LearnMoreButton />
      </div>

      <div
        className={`servicesCard ${"d-flex flex-column align-items-center justify-content-between bg-white"}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <figure
          className={`servicesIcon ${"d-flex align-items-center justify-content-center p-3"}`}
        >
          <NotePencil size={32} />
        </figure>
        <h3 className="titleCardServices">Ux & Ui Desgin </h3>
        <p className={`cardTextServices ${"text-center w-100"}`}>
          Sketch information architecture and simple mock-ups, convert them into
          clickable prototypes and finish with usable interface designs to
          deliver a good and reliable user experience.
        </p>
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default ServicesCards;
