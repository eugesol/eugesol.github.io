import React from "react";
import FadeIn from 'react-fade-in';
import Header from './Components/Header'
import Container from './Components/Container'
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import './App.css';




function App() {
  return (
    <Container>
      <FadeIn>
        <div>
          <Header />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <Contact />
        </div>
      </FadeIn>
    </Container>
  );
}

export default App;