import style from "./Cards.module.css";

const Cards = () => {
  const URL =
    "https://res.cloudinary.com/dkgrb4v8p/image/upload/v1713419259/devices_dh61h6.webp";
  const content =
    "Maecenas sed diam eget risus varius blandit sit amet non magna.";

  return (
    <div className={` ${style.container} ${"position-relative w-100 "}`}>
      <div className={` ${style.card} ${"d-flex w-100 p-4 overflow-hidden "}`}>
        <section>
          <span className="d-flex flex-column w-100 text-white ">
            <h3>Get in touch with us</h3>
            <p>{content}</p>
          </span>
          <button>Hire us</button>
        </section>
      </div>

      <div className={` ${style.card} ${"d-flex  w-100 p-4 overflow-hidden text-white"}`}>
        <section>
          <span className="d-flex flex-column w-100">
            <h3>Our Projects</h3>
            <p>{content}</p>
          </span>
          <button>See Projects</button>
        </section>
        <figure className="position-relative d-flex justify-content-center align-items-center">
          <img src={URL} alt="cellphone" className="position-absolute pe-3"/>
        </figure>
      </div>
    </div>
  );
};

export default Cards;
