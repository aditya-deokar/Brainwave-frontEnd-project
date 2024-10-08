import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifites from "./components/Benifites";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {


  return (

    <>
      
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Benifites />
        <Collaboration/>
        <Services/>
        <Roadmap/>
        <Footer/>

      </div>
      <ButtonGradient />

    </>

  );
}

export default App
