import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { News } from "./pages/News";
import { ToggleTheme } from "./components/ThemeContext";
import '@fontsource/press-start-2p';
import '@fontsource/ibm-plex-sans-kr';
export default function App() {
    return (React.createElement(BrowserRouter, null,
        React.createElement(ToggleTheme, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/" },
                    React.createElement(Route, { index: true, element: React.createElement(LandingPage, null) }),
                    React.createElement(Route, { path: "/news", element: React.createElement(News, null) }))))));
}
// ReactDom.render(<App />, document.getElementById("root"));
