import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import lottie from "../src/components/lottie/lottie.json"
import Lottie from "lottie-react";
import Services from "./components/services/Sevices";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
     <section id="Homepage">
      <Lottie animationData={lottie} className="minimizedLottie"/>
         <Navbar/>
         <Hero/>
      </section>
      <section id="Services">
         <Parallax type="services"/>
      </section>
      <section>
         <Services/>
      </section>
      <section id="Portfolio">
         <Parallax type="porfolio"/>
      </section>
      <Portfolio/>
      <section id="Contact">
       <Contact/>  
      </section>
     {/* <Test/>
     <Test/> */}

  </div>;
};

export default App;
