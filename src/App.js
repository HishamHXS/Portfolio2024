import React from 'react';
import Projects from './subpages/projects';
import Sidebar from './subpages/sidebar';
import About from './subpages/about';
import Interests from './subpages/interests';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <h1>Hisham Haque</h1>
        <p>Software Engineer</p>
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
      </section>
    </div>
  );
}

export default App;