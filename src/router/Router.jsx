import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/TransitionComponent';

import Services from '../components/Services';
import Roadmap from '../components/Roadmap';
import Collaboration from '../components/Collaboration';
import LandingPage from '../components/LandingPage';
import Hero from '../components/Hero';
import Benifites from '../components/Benifites';

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>

     
        <Route
           path="/Brainwave-frontEnd-project"
          element={
            <TransitionComponent>
              <LandingPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/Brainwave-frontEnd-project/Roadmap"
          element={
            <TransitionComponent>
              <Roadmap />
            </TransitionComponent>
          }
        />
        <Route
          path="/Brainwave-frontEnd-project/services"
          element={
            <TransitionComponent>
              <Services />
            </TransitionComponent>
          }
        />
        <Route
          path="/Brainwave-frontEnd-project/collaboration"
          element={
            <TransitionComponent>
              <Collaboration />
            </TransitionComponent>
          }
        />
        <Route
          path="/Brainwave-frontEnd-project/Features"
          element={
            <TransitionComponent>
              <Hero />
            </TransitionComponent>
          }
        />
        <Route
          path="/Brainwave-frontEnd-project/Howtouse"
          element={
            <TransitionComponent>
              <Benifites />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  )
}

export default Router