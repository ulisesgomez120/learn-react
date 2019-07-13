import React, { useState } from "react";
import classes from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";

const App = props => {
  // state = {
  //   persons: [
  //     { name: "Max", age: 24 },
  //     { name: "Min", age: 29 },
  //     { name: "Abs", age: 22 }
  //   ]
  // };
  // render() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "0", name: "Max", age: 24 },
      { id: "1", name: "Min", age: 29 },
      { id: "2", name: "Abs", age: 22 }
    ]
  });
  const [showPersonState, setPersonState] = useState({
    showPerson: false
  });

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });
    const persons = [...personsState.persons];
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    });
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons
    });
  };

  const togglePersonHandler = () => {
    const doesShow = showPersonState.showPerson;
    setPersonState({
      showPerson: !doesShow
    });
  };

  let persons = null;

  if (showPersonState.showPerson) {
    persons = (
      <div>
        <People
          people={personsState.persons}
          clicked={deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }

  return (
    <div className={classes.App}>
      <Cockpit
        btnClass={showPersonState.showPerson}
        toggleClass={togglePersonHandler}
      />
      {persons}
    </div>
  );
  // }
};

export default App;
