import React, { useState } from 'react';

function StrategicObjective() {

  let count = 1;
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
      value:""
    }
  ];

  const [ arr, setArr ] = useState(keyMeasures);

  const addMeasure = e => {
    e.preventDefault();

    count = keyMeasures.length;
    setArr(s => {
      return [
        ...s,
        {
          type:"text",
          id: count+1,
          size: "90",
          value: ""
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  return(
    <div className="stratObjContainer">

      <div>
        <form className="formContainer">
          <div className="form-left">
              <div className="objective form-input">
                <label htmlFor="objective">Objective {count}:</label>
                <input type="text" name="objective" size="90" />
              </div>

              <div className="key-measures form-input" id="keyMeasures">
                <div>
                  <label htmlFor="keyMeasures">Key Measures:</label>
                  <label className="add-measure" htmlFor="keyMeasures">Add additional key measure
                    <button className="add-measure-button" onClick={addMeasure}>+</button></label>
                </div>
                {arr.map((item, i) => {
                  return (
                    <input
                      onChange={handleChange}
                      type={item.type}
                      id={item.id}
                      name="keyMeasures"
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
};

export default StrategicObjective;
