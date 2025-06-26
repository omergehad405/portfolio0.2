import { useContext } from "react";
import ProjectsContext from "./ProjectsContext";

const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsProvider"
    );
  }
  return context;
};

export default useProjectsContext;
