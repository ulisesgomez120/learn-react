import React from "react";
import Person from "./Person/Person";
const people = props =>
  props.people.map((person, index) => {
    console.log(props);
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        change={event => props.changed(event, person.id)}
      />
    );
  });

export default people;
