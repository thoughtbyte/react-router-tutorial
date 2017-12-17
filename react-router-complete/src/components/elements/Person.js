import React from "react";

import "./css/Person.css";

const renderListItems = person => {
  const listItems = [];

  for (const property in person) {
    if (!Array.isArray(person[property])) {
      listItems.push(
        <li key={property}>
          {property}:{" "}
          {person[property].slice(0, 8) === "https://" ? (
            <a
              href={person[property]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {person[property]}
            </a>
          ) : (
            person[property]
          )}
        </li>
      );
    }
  }

  return listItems;
};

export const Person = ({ people, match }) => {
  const { personId } = match.params;

  return people[personId - 1] ? (
    <section className="person">
      <ul>{renderListItems(people[personId - 1])}</ul>
    </section>
  ) : (
    <ul>
      <li>Person not found.</li>
    </ul>
  );
};
