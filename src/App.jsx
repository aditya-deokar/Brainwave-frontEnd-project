import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifites from "./components/Benifites";
import Collaboration from "./components/Collaboration";

import Header from "./components/Header";
import Hero from "./components/Hero";
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

      </div>
      <ButtonGradient />

    </>

  );
}

export default App
