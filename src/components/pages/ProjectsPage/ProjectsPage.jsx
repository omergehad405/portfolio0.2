import React, { useEffect } from "react";
import Projects from "./Projects";
import NeedProject from "../../static/NeedProject";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Projects />
      <NeedProject />
    </div>
  );
}

export default ProjectsPage;
