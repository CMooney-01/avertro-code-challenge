import React, { useState, useContext, useEffect, useRef } from 'react';
import { ObjectiveContext, ObjectiveContextProvider } from "./ObjectiveContext.js"

function ObjectiveComponent() {

  const [context, setContext] = useContext(ObjectiveContext);

  //Getting stored objective names from local storage and parsing back to object/array
  useEffect(() => {
    setContext({...context, objectiveIds: JSON.parse(localStorage.getItem('objectiveIds'))});
  }, [])

  let storedIds = context.objectiveIds

  let idArray = [];
  //Recomposing stored objective ids into an array
  function remakeArray(storedIds) {
    for(let i=0; i<storedIds.length; i++) {
      idArray.push(storedIds[i])
    }
  }
  remakeArray(storedIds)



  // //getting todays date to set default start date
  // let today = new Date();
  // //formatting start date
  // //Spent about 2 hours figuring out that setting locale to en-AU screwed up the defaultValue rendering. Fun times :>
  // let defaultStartDate = today.toLocaleDateString('en-CA');
  // //formatting end date to be 1 month later by default
  // let year = today.getFullYear();
  // let month = `${today.getMonth() + 2}`.padStart(2, "0");
  // let day = `${today.getDate()}`.padStart(2, "0");
  //
  // let defaultEndDate = [year, month, day].join("-");
  //
  // //managing state for date settings
  // const [ startDate, setStartDate ] = useState(defaultStartDate);
  // const [ endDate, setEndDate ] = useState(defaultEndDate);
  //
  // const onChangeStartDate = (event) => {
  //   setStartDate(new Date(event.target.value))
  // }
  //
  // const onChangeEndDate = (event) => {
  //   setEndDate(new Date(event.target.value))
  // }

  //Adding Key Measures and storing the user input
  const keyMeasures = [
    {
      type:"text",
      id:"keyMeasures1",
      value:"",
      size: "90",
      name:"keyMeasures1"
    }
  ];

  const [ arr, setArr ] = useState(keyMeasures);

  const addMeasure = e => {
    e.preventDefault();

    let count = arr.length;
    // console.log(count);

    let newMeasure = {
              type:"text",
              id: (`keyMeasures${count+1}`),
              size: "90",
              value: "",
              name:(`keyMeasures${count+1}`)
            };

    //Not sure why it isn't counting first render in length, figure out if I have time
    if (arr.length <= 2) {
      setArr(arr => [...arr,
        newMeasure
      ]);
    } else {
      alert("Cannot add more than three key measures.")
    }
  };

  //Storing Objective, Key Measure and Date form data after hitting 'Update' button
  let data = [];

  const onUpdate = (e) => {
    e.preventDefault();

    for(let i=0; i < idArray.length; i++) {

      let objectiveId = idArray[i];

      let objective = document.querySelector('input[name="objective"]').value;
      let measure1 = document.querySelector('input[name="keyMeasures1"]').value;
      let measure2 = document.querySelector('input[name="keyMeasures2"]').value;
      let measure3 = document.querySelector('input[name="keyMeasures3"]').value;
      let start = document.querySelector('input[name="startDate"]').value;
      let end = document.querySelector('input[name="endDate"]').value;

      let newObjectiveData = { objectiveId,
                            objective,
                            measure1,
                            measure2,
                            measure3,
                            start,
                            end
                          }

      data.push(newObjectiveData);

      setContext({...context, objectiveData: data});
      localStorage.setItem('objectiveData', JSON.stringify(context.objectiveData));
      alert("Data saved.")
    }
  }

  return(
    <div className="stratObjContainer">

      <div>
        <form className="formContainer" id={context.objectiveCount}>
          <div className="form-left">
              <div className="objective form-input">
                <label htmlFor="objective">Objective {context.objectiveCount}:</label>
                <input type="text" name="objective" id={context.objectiveData[0].objectiveId} size="90" />
              </div>

              <div className="key-measures form-input" id="keyMeasures">
                  <div>
                      <label htmlFor="keyMeasures">Key Measures:</label>
                      <label className="add-measure" htmlFor="keyMeasures">Add additional key measure
                        <button className="add-measure-button" onClick={addMeasure}>+</button></label>
                  </div>
                  {arr.map(item => {
                    return (
                      <input
                        type={item.type}
                        id={item.id}
                        name={item.name}
                        size={item.size}
                      />
                    );
                  })}
              </div>

              <button className="formUpdateButton" id={context.objectiveCount} onClick={onUpdate}>Update</button>
          </div>

          <div className="form-right">
              <div className="start-date form-input">
                <label htmlFor="startDate">Start Date:</label>
                <span className="date-input">
                  <input type="date" name="startDate" id="startDate"
                         defaultValue={context.objectiveData[0].defaultStartDate}
                  />
                </span>
              </div>

              <div className="end-date form-input">
                <label htmlFor="endDate">End Date:</label>
                <span className="date-input"><input type="date" name="endDate" defaultValue={context.objectiveData[0].defaultEndDate}/></span>
              </div>
          </div>
        </form>
      </div>

    </div>

  );
}

export default ObjectiveComponent;
