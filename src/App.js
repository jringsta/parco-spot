import React from "react";
import './App.css';

import Header from './sections/Header/Header';
import AttentionGrabber from './sections/AttentionGrabber/AttentionGrabber';
import Why from './sections/Why/Why';
import PositiveImpact from './sections/PositiveImpact/PositiveImpact';
import Places from './sections/Places/Places';
import CallToAction from './sections/CallToAction/CallToAction';
import Footer from './sections/Footer/Footer';

function App() {


  return (
    <div className="App ph6-l ph5-m ph4">
      <Header />
      <AttentionGrabber />
      <Why />
      <PositiveImpact />
      <Places />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
