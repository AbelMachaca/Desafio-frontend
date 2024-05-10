import ServicesCards from "../ServicesCards/ServicesCards";
import "./Services.css";

const Services = () => {
  return (
    <div  className={`${"containerServices d-flex align-items-center flex-column position-relative w-100"}`}id="services">
      <h2 className={` ${"titleServices text-white"}`}>Our Services</h2>
      <p className={`paragraphInfoServices ${""}`}>
        We feel very strong abour our skills when it comes to planning,
        designing and coding applications. Here is what we love to do!
      </p>
      <ServicesCards />
    </div>
  );
};

export default Services;
