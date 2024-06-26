import Tnw from "../../SVG/Tnw";
import Google from "../../SVG/Google";
import Nike from "../../SVG/Nike";
import Airbnb from "../../SVG/Airbnb";
import "./Cases.css";
import Africa from "../../SVG/Africa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 500,
  once: true,
  easing: "ease",
});

const Cases = () => {
  return (
    <div className={`containerCases ${"position-relative w-100 bg-white"}`}>
      <section className="position-relative w-100 d-flex flex-column align-items-center">
        <h2>Clients we worked with</h2>

        <span className="w-100 d-flex justify-content-center justify-content-md-between flex-wrap gap-5 mt-4 ">
          <figure
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <Tnw />
          </figure>
          <figure
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="150"
            data-aos-offset="0"
          >
            <Google />
          </figure>
          <figure
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <Nike />
          </figure>
          <figure
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="250"
            data-aos-offset="0"
          >
            <Airbnb />
          </figure>

          <figure
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <Africa />
          </figure>
        </span>
      </section>
    </div>
  );
};

export default Cases;
