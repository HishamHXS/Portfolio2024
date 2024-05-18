import React from 'react';
import Projects from './projects';
import Sidebar from './sidebar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <h1>John Doe</h1>
        <p>Software Engineer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Information about John Doe...</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>John Doe's experience...</p>
        </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>John Doe's skills...</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <Projects />
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact information for John Doe...</p>
      </section>
    </div>
  );
}

export default App;