import React, { createContext, useState, useEffect } from 'react';

const functionTemplate = () => {}

//getting todays date to set default start date
let today = new Date();
//formatting start date
//Spent about 2 hours figuring out that setting locale to en-AU screwed up the defaultValue rendering. Fun times :>
let defaultStartDate = today.toLocaleDateString('en-CA');
//formatting end date to be 1 month later by default
let year = today.getFullYear();
let month = `${today.getMonth() + 2}`.padStart(2, "0");
let day = `${today.getDate()}`.padStart(2, "0");

let defaultEndDate = [year, month, day].join("-");

// //managing state for date settings
// const [ startDate, setStartDate ] = useState(defaultStartDate);
// const [ endDate, setEndDate ] = useState(defaultEndDate);

// const onChangeStartDate = (event) => {
//   setStartDate(new Date(event.target.value))
// }
//
// const onChangeEndDate = (event) => {
//   setEndDate(new Date(event.target.value))
// }

//BRUH. Spent 3? hours trying to why objectiveData was returning undefined and it was the fact that
//I spelt it 'obejctiveData' rrrreeeeeeeeee
const objectiveContext = {
  objectiveIds: [],
  objectiveCount: 1,
  objectiveData: [{
    objectiveId: 1,
    objective: "",
    measure1: "",
    measure2: "",
    measure3: "",
    startDate: defaultStartDate,
    endDate: defaultEndDate,
  }],
}

const ObjectiveContext = React.createContext(objectiveContext)

const ObjectiveContextProvider = ({children}) => {
  const [context, setContext ] = useState(objectiveContext)

  return (
    <ObjectiveContext.Provider value={[context, setContext]}>
      {children}
    </ObjectiveContext.Provider>
  );
}

export { ObjectiveContext, ObjectiveContextProvider};
