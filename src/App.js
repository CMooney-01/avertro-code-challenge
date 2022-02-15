
import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Branding from "./components/Branding.js";
import Dashboard from "./pages/Dashboard.js";
import StrategicObjective from "./components/StrategicObjective.js"
import ObjectiveComponent from "./components/ObjectiveComponent.js"
import { ObjectiveContext, ObjectiveContextProvider } from "./components/ObjectiveContext.js"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objectives: 1
    };
  }

  updateObjectives = (value) => {
    this.setState( { objectives: value } );
  }

  render() {
    return (
      <ObjectiveContextProvider>
        <div className="App">
          <Navbar />
          <Branding />
          <Dashboard />
        </div>
      </ObjectiveContextProvider>
    );
  }

}

export default App;
