// Dans App.js
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/common/Header';

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
