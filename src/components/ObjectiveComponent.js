import React, { useState } from 'react';

function ObjectiveComponent() {

  let objCount = 1;
  //getting todays date to set default start date
  let today = new Date();
  //formatting start date
  // Spent about 2 hours figuring out that setting locale to en-AU screwed up the defaultValue rendering. Fun times :>
  let defaultStartDate = today.toLocaleDateString('en-CA');
  //formatting end date to be 1 month later by default
  let year = today.getFullYear();
  let month = `${today.getMonth() + 2}`.padStart(2, "0");
  let day = `${today.getDate()}`.padStart(2, "0");

  let defaultEndDate = [year, month, day].join("-");

  //managing state for date settings
  const [ startDate, setStartDate ] = useState(defaultStartDate);
  const [ endDate, setEndDate ] = useState(defaultEndDate);

  const onChangeStartDate = (event) => {
    setStartDate(new Date(event.target.value))
  }

  const onChangeEndDate = (event) => {
    setEndDate(new Date(event.target.value))
  }

  //Adding Key Measures and storing the user input
  const keyMeasures = [
    {
      type:"text",
      id:1,
      value:"",
      size: "90",
      name:"keyMeasures1"
    }
  ];

  const [ arr, setArr ] = useState(keyMeasures);

  const addMeasure = e => {
    e.preventDefault();

    let count = keyMeasures.length;

    let newMeasure = {
              type:"text",
              id: count+1,
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

  // Not sure if i need this - can just update state of key measures when hitting update?
  // const handleChange = e => {
  //   e.preventDefault();
  //
  //   const index = e.target.id;
  //   setArr(s => {
  //     const newArr = s.slice();
  //     newArr[index].value = e.target.value;
  //
  //     return newArr;
  //   });
  // };

  return(
    <div className="stratObjContainer">

      <div>
        <form className="formContainer">
          <div className="form-left">
              <div className="objective form-input">
                <label htmlFor="objective">Objective {objCount}:</label>
                <input type="text" name="objective" size="90" />
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

              <button className="formUpdateButton">Update</button>
          </div>

          <div className="form-right">
              <div className="start-date form-input">
                <label htmlFor="startDate">Start Date:</label>
                <span className="date-input">
                  <input type="date" name="startDate" id="startDate"
                         defaultValue={defaultStartDate}
                  />
                </span>
              </div>

              <div className="end-date form-input">
                <label htmlFor="endDate">End Date:</label>
                <span className="date-input"><input type="date" name="endDate" defaultValue={defaultEndDate}/></span>
              </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default ObjectiveComponent;
