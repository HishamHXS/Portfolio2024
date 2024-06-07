import React from 'react';
import Projects from './subpages/projects';
import Links from './subpages/links';
import About from './subpages/about';
import Interests from './subpages/interests';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hisham Haque</h2>
        <p>Software Engineer - Google</p>
      </header>

      <section id="about">
       <About />
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <Projects />
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <Interests />
      </section>

      <section id="contact">
        <h2>Contact</h2>
       <p> Email: hishamhaque11@gmail.com</p>
       <Links />
      </section>
    </div>
  );
}

export default App;