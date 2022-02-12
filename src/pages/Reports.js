import React from 'react';
import ReportsDashboard from "../components/ReportsDashboard.js";

function SecurityStrategy() {


  return (
    <div className="securityStrategy">

      <div>
        <p className="pageHeading">Set Security Strategy</p>
        <hr className="horizontalRule" />
      </div>

      <div className="reportsContainer">
        <ReportsDashboard />
      </div>

    </div>

  );
};

export default SecurityStrategy;
