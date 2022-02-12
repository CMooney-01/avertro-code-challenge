
import './App.css';
import Navbar from "./components/Navbar.js";
import Branding from "./components/Branding.js";
import Reports from "./pages/Reports.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Branding />
      <Reports />
    </div>
  );
}

export default App;
