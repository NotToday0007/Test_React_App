import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World! I’m Rifat 😄</h1>
        <p>Welcome to my first React app deployed on Vercel!</p>

        <div className="buttons">
          <a href="https://github.com/<your-username>" target="_blank" rel="noopener noreferrer">
            My GitHub
          </a>
          <a href="#projects">My Projects</a>
        </div>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>My First GitHub Page</li>
            <li>React Practice App</li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
