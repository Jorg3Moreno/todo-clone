import React from "react";

import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import { ProjectsProviders, SelectedProjectProvider } from "./context";

const App = () => (
  <SelectedProjectProvider>
    <ProjectsProviders>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProviders>
  </SelectedProjectProvider>
);

export default App;
