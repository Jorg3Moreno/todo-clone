import React, { createContext, useContext } from "react";
import { useProjects } from "../hooks";

// context pass data between the three components
export const ProjectsContext = createContext();

export const ProjectsProviders = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
