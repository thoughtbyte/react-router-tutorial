import React from "react";

import { Person, Loading } from "../elements";
import "./css/People.css";

export const People = ({ people }) => {
  return people.length > 0 ? (
    <section className="people">
      {people.map((person, index) => {
        // render a list of links of people
        return <p>{person.name}</p>;
      })}
      {/* render currently selected individual person below list */}
    </section>
  ) : (
    <Loading />
  );
};
