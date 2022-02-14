import React, { useState, useContext } from 'react';
import ObjectiveComponent from "./ObjectiveComponent.js"
import { ObjectiveContext, ObjectiveContextProvider } from "./ObjectiveContext.js"

function StrategicObjective() {


  const context = useContext(ObjectiveContext);
  const [ nextStatus, setNextStatus ] = useState(context.objectiveCount)
  console.log(context.objectiveCount);


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
    <ObjectiveContextProvider>
      <div>
        {arr.map(item => {
          return (
              <ObjectiveComponent />
          );
        })}
        <button className="add-objective-button" onClick={addObjective}>+<a> Add Objective</a></button>
      </div>

    </ObjectiveContextProvider>
  );

};

export default StrategicObjective;
