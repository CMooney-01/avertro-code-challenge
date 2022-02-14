import React, { createContext, useState, useEffect } from 'react';

const functionTemplate = () => {}

//BRUH. Spent 3? hours trying to why objectiveData was returning undefined and it was the fact that
//I spelt it 'obejctiveData' rrrreeeeeeeeee
const objectiveContext = {
  objectiveCount: 1,
  objectiveData: [{
    objectiveId: 1,
    objective: "",
    measure1: "",
    measure2: "",
    measure3: "",
    startDate: "",
    endDate: "",
  }],
}

const ObjectiveContext = React.createContext(objectiveContext)

const ObjectiveContextProvider = ({children}) => {
  const [context, setContext ] = useState(objectiveContext)

  return (
    <ObjectiveContext.Provider value={context}>
      {children}
    </ObjectiveContext.Provider>
  );
}

export { ObjectiveContext, ObjectiveContextProvider};
