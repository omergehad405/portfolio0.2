import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import NeedProject from "../../static/NeedProject";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <NeedProject />
    </div>
  );
}

export default HomePage;
