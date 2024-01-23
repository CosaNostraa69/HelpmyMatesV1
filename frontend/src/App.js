// Dans App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Routes from './Routes';
import Header from './components/common/Header';
import './styles/App.css';

function App() {
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" // Couleur blanche des particules
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff", // Couleur des lignes reliant les particules
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <Particles className="particles" options={particlesOptions} />
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
