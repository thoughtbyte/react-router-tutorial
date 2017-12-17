import React from "react";

import "./css/About.css";

export const About = () => {
  return (
    <section className="about">
      <p>
        This small app demonstrates how to use React Router version 4. The{" "}
        <a
          href="https://github.com/ReactTraining/react-router"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router documentation
        </a>{" "}
        is unfortunately a bit tricky sometimes. For an excellent introduction
        resource check out the{" "}
        <a
          href="https://css-tricks.com/react-router-4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          css-tricks guide
        </a>.
      </p>
    </section>
  );
};
