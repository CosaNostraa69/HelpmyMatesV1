import "./styles/App.css"
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from "./components/common/Header";
import NavigationBar from "./components/common/navigationBar";


function App() {
  return (
    <div className="App">
      
        <Header /> 
        <NavigationBar />
    </div>
  );
}

export default App;
