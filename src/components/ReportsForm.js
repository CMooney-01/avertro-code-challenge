import React, { useState } from 'react';

function StrategicObjectiveForm() {

  let count = 1;

  function getId() {
    return(
      count++
    )
  }
  const [ form, setForm ] = useState({
    form: {
      id: getId(),
      objective: "",
      measure1: "",
      measure2: "",
      measure3: "",
    }
  });

  console.log(form)

  const handleChangeForm = (id, event) => {
    const newInput = form.map(i => {
      if (id = i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    });

    setForm(newInput);
  }

  const handleAddForm = (event) => {
    event.preventDefault()
    if(form.length <3) {
      setForm([...form, { id:getId(),
                          objective: "",
                          measure1: "",
                          measure2: "",
                          measure3: "",
                }
              ])
    } else {
      alert("Maximum of three objectives.")
    }

  }

  return (
    <div>

    <form>
      { form.map(form => (
        <div key={form.id}>
            <label>Objective: </label>
            <input type="text"
                   name="objective"
                   label="objective"
                   value={form.objective}
                   onChange={(event) => handleChangeForm(form.id, event)}
                  />


            <label>Key Measures: </label>
            <button>Add key measure</button>
            <input type="text"
                 name="measure1"
                 label="measure1"
                 value={form.measure1}
                 onChange={(event) => handleChangeForm(form.id, event)}
               />
           <input type="text"
                name="measure2"
                label="measure2"
                value={form.measure2}
                onChange={(event) => handleChangeForm(form.id, event)}
              />
          <input type="text"
               name="measure3"
               label="measure3"
               value={form.measure3}
               onChange={(event) => handleChangeForm(form.id, event)}
             />
        </div>
      )) }

      <button type="submit">Save Data</button>
    </form>
    <button onClick={event => handleAddForm(event)}>Add New Objective</button>
    </div>

  )

}

export default StrategicObjectiveForm
