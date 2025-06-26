import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import SkilsSection from "./SkilsSection";
import LatestProjects from "./LatestProjects";
import NeedProject from "../../static/NeedProject";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <SkilsSection />
      <LatestProjects />
      <NeedProject />
    </div>
  );
}

export default AboutPage;
