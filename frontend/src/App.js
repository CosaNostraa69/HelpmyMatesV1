import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/common/Header';
import './styles/App.css';

function App() {
 


  return (
          <Router>
              <div className="App">
                  <Header />
                  <Routes />
              </div>
          </Router>
  );
}

export default App;