import React from "react";

import { Loading } from "../elements";
import "./css/Home.css";

export const Home = () => {
  return (
    <section className="home">
      <p>This is our home page!</p>
      <p>
        Here is the loading component, in case the internet is too fast to see
        it on page load:
      </p>
      <Loading />
    </section>
  );
};
