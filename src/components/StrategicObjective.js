import React, { useState } from 'react';
import ObjectiveComponent from './ObjectiveComponent.js'

function StrategicObjective() {

  //Using state as counter for how many objectives to display
  const [ state, setState ] = useState(1);
  //Updating counter/state with each 'Add Objective' button click
  function addObjective() {
    setState(state+1);
    console.log(state);
  }

  function displayObjectives() {
    let objectives = [];

    for (let i=0; i < state; i++) {
      objectives.push(
        <div key={i}>
          <ObjectiveComponent />
        </div>
      )
    }
    return objectives;
  }

  return(
    <div>
      {displayObjectives()}
      <button className="add-objective-button" onClick={addObjective}>+<a> Add Objective</a></button>
    </div>
  );

};

export default StrategicObjective;
