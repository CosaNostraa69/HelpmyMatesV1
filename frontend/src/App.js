// Dans App.js
import "./styles/App.css";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from "./components/common/Header";
import AppRoutes from "./Routes"; // Importez avec le nouveau nom

function App() {
    return (
        <div className="App">
            <Header />
            <AppRoutes /> 
        </div>
    );
}

export default App;
