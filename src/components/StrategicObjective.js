import React, { useState } from 'react';

function StrategicObjective() {

  let count = 1;
  //getting todays date to set default start date
  let today = new Date();
  //formatting start date
  // Spent about 2 hours figuring out that setting locale to en-AU screwed up the defaultValue rendering. Fun times :>
  let date = today.toLocaleDateString('en-CA');
  //formatting end date to be 1 month later by default
  let year = today.getFullYear();
  let month = `${today.getMonth() + 2}`.padStart(2, "0");
  let day = `${today.getDate()}`.padStart(2, "0");

  let futureDate = [year, month, day].join("-");

  return(
    <div className="stratObjContainer">

      <div>
        <form className="formContainer">
          <div className="form-left">
              <div className="objective form-input">
                <label htmlFor="objective">Objective {count}:</label>
                <input type="text" name="objective" size="90" />
              </div>

              <div className="key-measures form-input">
                <div>
                  <label htmlFor="keyMeasures">Key Measures:</label>
                  <label className="add-measure" htmlFor="keyMeasures">Add additional key measure <button className="add-measure-button">+</button></label>
                </div>
                <input type="text" name="keyMeasures" size="90"/>
              </div>

              <button className="formUpdateButton">Update</button>
          </div>

          <div className="form-right">
              <div className="start-date form-input">
                <label htmlFor="startDate">Start Date:</label>
                <span className="date-input">
                  <input type="date" name="startDate" id="startDate"
                         defaultValue={date}
                  />
                </span>
              </div>

              <div className="end-date form-input">
                <label htmlFor="endDate">End Date:</label>
                <span className="date-input"><input type="date" name="endDate" defaultValue={futureDate}/></span>
              </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default StrategicObjective;
