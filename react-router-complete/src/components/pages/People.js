import React from "react";
import { NavLink, Route } from "react-router-dom";

import { Person, Loading } from "../elements";
import "./css/People.css";

export const People = ({ people, setCurrentPerson }) => {
  return people.length > 0 ? (
    <section className="people">
      {people.map((person, index) => (
        <NavLink
          to={`/people/${index + 1}`}
          className="person"
          activeClassName="active"
          key={person.url}
          onClick={() => {
            setCurrentPerson(index + 1);
          }}
        >
          {person.name}
        </NavLink>
      ))}
      <Route
        path="/people/:personId"
        render={props => <Person {...props} people={people} />}
      />
    </section>
  ) : (
    <Loading />
  );
};
