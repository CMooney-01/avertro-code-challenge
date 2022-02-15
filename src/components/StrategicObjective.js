import React, { useState, useContext, useEffect } from 'react';
import ObjectiveComponent from "./ObjectiveComponent.js"
import { ObjectiveContext, ObjectiveContextProvider } from "./ObjectiveContext.js"
import ReportsForm from "./ReportsForm.js"

function StrategicObjective() {

  

  return(
    <ObjectiveContextProvider>
      <div>
        <ReportsForm />
        <button className="add-objective-button" >+<a> Add Objective</a></button>
      </div>

    </ObjectiveContextProvider>
  );

};

export default StrategicObjective;
