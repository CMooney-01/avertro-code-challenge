import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
// Need to figure out why babel config isn't recognising babel-plugin-macros.config.js

function Navbar() {
  return(

    <div className="navbar">
      <a className="nav-item" href="#section"> Reports</a>
      <a className="nav-item" href="#section">Strategy</a>
      <a className="nav-item" href="#section">Assessments</a>
      <a className="nav-item" href="#section">Catalogue</a>
      <a className="nav-item" href="#section">Settings</a>
    </div>

  );
};

export default Navbar;
