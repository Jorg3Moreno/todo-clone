import React, { useState } from "react";

import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import { ProjectsProviders, SelectedProjectProvider } from "./context";

const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProviders>
        <main
          className={darkMode ? "darkmode" : undefined}
          data-testid="application"
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProviders>
    </SelectedProjectProvider>
  );
};

export default App;
