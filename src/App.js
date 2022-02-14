
import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Branding from "./components/Branding.js";
import Reports from "./pages/Reports.js";
import StrategicObjective from "./components/StrategicObjective.js"
import ObjectiveComponent from "./components/ObjectiveComponent.js"

function App() {
  // Can't seem to get this to work how I want it to for setting headings Objective 1, Objective 2 etc.
  // Answer is probably use context or array position instead. Come back to this once functionality complete.
  const [ objCount, setObjCount ] = useState('1');
  <>
  <StrategicObjective setObjCount={setObjCount} />
  <ObjectiveComponent objCount={objCount} />
  </>

  return (
    <div className="App">
      <Navbar />
      <Branding />
      <Reports />
    </div>
  );
}

export default App;
