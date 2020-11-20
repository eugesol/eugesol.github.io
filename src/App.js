import React from "react";
import Header from './Components/Header'
import Container from './Components/Container'
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";




function App() {
  return (
    <Container>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
    </Container>
  );
}

export default App;