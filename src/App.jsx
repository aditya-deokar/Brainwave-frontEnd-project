import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifites from "./components/Benifites";
import Collaboration from "./components/Collaboration";

import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {


  return (

    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifites />
        <Collaboration/>

      </div>
      <ButtonGradient />

    </>

  );
}

export default App
