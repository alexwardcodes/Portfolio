import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Resume />
      <Work />
      <Portfolio />
      <Contact/>
    </>
  );
}

export default App;
