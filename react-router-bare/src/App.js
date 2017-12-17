import React, { Component } from "react";

import { NavBar } from "./components/elements";
import { Home, About, People, NotFound } from "./components/pages";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  async componentDidMount() {
    const peopleUrls = [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/2/",
      "https://swapi.co/api/people/3/",
      "https://swapi.co/api/people/4/",
      "https://swapi.co/api/people/5/",
    ];
    const peopleResponses = await Promise.all(
      peopleUrls.map(personUrl => fetch(personUrl))
    );
    const people = await Promise.all(
      peopleResponses.map(personResponse => personResponse.json())
    );
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Home />
          <About />
          <People people={this.state.people} />
          <NotFound />
          {/* We want to conditionally render a component here
          depending on the current URL path */}
        </main>
      </div>
    );
  }
}

export default App;
