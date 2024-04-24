import "./App.css";


import {
  Navbar,
   Hero,
  Technology,
   Services,
   Cases,
  Cards,
   Footer,
} from "./components/index.jsx";

function App() {
  return (
    <div className="container-main">
      <Navbar />     
      <Hero />
      <Services />
      <Technology />
      <Cases />
      <Cards />
      <Footer /> 
      <img src="https://res.cloudinary.com/dsuuinvqp/image/upload/v1713977490/gqqc6dckqzdnucpmva98.jpg" alt="Fondo decorativo con patrones abstractos" className="background-img" />
    </div>
  );
}

export default App;
