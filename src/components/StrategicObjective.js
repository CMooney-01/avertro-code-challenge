import React from 'react';

function StrategicObjective() {

  let count = 1;

  return(
    <div className="stratObjContainer">

      <div>
        <form className="formContainer">
          <div className="form-left">
              <div className="objective form-input">
                <label for="objective">Objective {count}:</label>
                <input type="text" name="objective" size="90" />
              </div>

              <div className="key-measures form-input">
                <label for="keyMeasures">Key Measures:</label>
                <label className="add-measure" for="keyMeasures">Add additional key measure <button className="add-measure-button">+</button></label>
                <input type="text" name="keyMeasures" size="90"/>
              </div>

              <button className="formButton">Update</button>
          </div>

          <div className="form-right">
              <div className="start-date form-input">
                <label for="startDate">Start Date:</label>
                <span className="date-input"><input type="date" name="startDate"/></span>
              </div>

              <div className="end-date form-input">
                <label for="endDate">End Date:</label>
                <span className="date-input"><input type="date" name="endDate"/></span>
              </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default StrategicObjective;
