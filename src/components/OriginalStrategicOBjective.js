import React, { useState, useContext, useEffect } from 'react';
import ObjectiveComponent from "./ObjectiveComponent.js"
import { ObjectiveContext, ObjectiveContextProvider } from "./ObjectiveContext.js"
import ReportsForm from "./ReportsForm.js"

function StrategicObjective() {


  const [context, setContext] = useContext(ObjectiveContext);
  // console.log(context.objectiveCount);

  //Creating default array to show on page load
  let objectives = [{
    id: "objective1",
    component: <ObjectiveComponent />
  }];
  //Using state to maintain/store objectives
  const [ arr, setArr ] = useState(objectives);
  let idArray = []
  // console.log(arr)

  function getIds(arr) {
    for (let i=0; i<arr.length; i++) {
      idArray.push(arr[i].id)
    }
    localStorage.setItem('objectiveIds', JSON.stringify(idArray))
  }

  getIds(arr)

  useEffect(() => {
    setContext({...context, objectiveIds: localStorage.getItem('objectiveIds')});
  }, [])

  //Using state as counter for how many objectives to display
  const [ state, setState ] = useState(1);

  //Updating counter/state with each 'Add Objective' button click
  const addObjective = e => {
    e.preventDefault();

    setState(state+1);

    setContext({...context, objectiveCount: state+1});

    if (arr.length <=2) {
      let count = arr.length;

      setArr(arr => [...arr,
      {id: (`objective${count+1}`),
      component: <ObjectiveComponent />}
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
