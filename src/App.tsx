import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { News } from "./pages/News";
import { ToggleTheme } from "./components/ThemeContext";
import '@fontsource/press-start-2p';
import '@fontsource/ibm-plex-sans-kr';

export default function App() {

  return (
    <BrowserRouter>
      <ToggleTheme>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path={"/news"} element={<News />} />
          </Route>
        </Routes>
     </ToggleTheme>
    </BrowserRouter>
  );
}

// ReactDom.render(<App />, document.getElementById("root"));
