import React, { useState } from 'react';
import StrategicObjective from "../components/StrategicObjective.js";
import MissionVision from "../components/MissionVision.js";


function ReportsDashboard() {

  const [ state, setState ] = useState('default');

  return(
    <div className="reportsDash">
      <div>
        <p className="pageHeading">Set Security Strategy</p>
        <hr className="horizontalRule" />
      </div>

      <div className="subDash">
        <div className="buttonContainer">
          <button className="dashButton" onClick={ () => setState('mission') }>Mission & Vision</button>
          <button className="dashButton" onClick={ () => setState('objectives') }>Strategic Business Objectives</button>
        </div>


        <div className="activeDash">
          { state === 'default'
            && (<MissionVision />)
          }
          { state === 'mission'
            && (<MissionVision />)
          }
          { state === 'objectives'
            && (<StrategicObjective />)
          }

        </div>
      </div>


    </div>
  );
};

export default ReportsDashboard;

// Clicking button should switch which component is being shown to the user
// Can use .hidden class to show/hide?
