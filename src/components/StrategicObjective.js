import React, { useState } from 'react';
import ObjectiveComponent from './ObjectiveComponent.js'

function StrategicObjective() {

  //Creating default array to show on page load
  let objectives = [ <ObjectiveComponent /> ];
  //Using state to maintain/store objectives
  const [ arr, setArr ] = useState(objectives);
  //Using state as counter for how many objectives to display
  const [ state, setState ] = useState(1);

  //Updating counter/state with each 'Add Objective' button click
  const addObjective = e => {
    e.preventDefault();

    setState(state+1);

    let newObj = <ObjectiveComponent />;

    //Again, not sure why it isn't counting the first rendered component. Fix if time.
    if (arr.length <=2) {
      setArr(arr => [...arr,
      newObj
      ]);
    } else {
      alert("Cannot add more than three strategies.")
    }
  }


  return(
    <div>
      {arr.map(item => {
        return (
            <ObjectiveComponent />
        );
      })}
      <button className="add-objective-button" onClick={addObjective}>+<a> Add Objective</a></button>
    </div>
  );

};

export default StrategicObjective;
