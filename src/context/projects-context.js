import React, { createContext, useContext } from "react";
import { useProjects } from "../hooks";

// Context provides a way to pass data through the component tree
// without having to pass props down manually at every level.

// Context is designed to share data that can be considered “global” 
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
