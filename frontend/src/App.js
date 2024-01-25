import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Routes from './Routes';
import Header from './components/common/Header';
import './styles/App.css';

function App() {
  const particlesInit = async (main) => {
    console.log("particlesInit", main);
    await loadFull(main);
  };
  
  const particlesLoaded = (container) => {
    console.log("particlesLoaded", container);
  };
  
  return (
    <Router>
      <div className="App">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 50,
              },
              color: {
                value: "#ffffff",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 3,
              },
              move: {
                speed: 2,
              }
            }
          }}
        />
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
