import React from "react";
import Header from "./Header/Header";
import Work from "./Home_page/Work/Work";
import Hero from "./Home_page/Hero/Hero";
import About from "./Home_page/About/About";
import Services from "./Home_page/Services/Services";
import NeedProject from "./Home_page/NeedProject/NeedProject";
import { HashRouter } from "react-router-dom";
import Contact from "./Contact_page/Contact";
function App() {
  return (
    <HashRouter>
      <Header />
      <Hero />
      <About />
      <Work />
      <Services />
      <NeedProject />
      <Contact />
    </HashRouter>
  );
}

export default App;
