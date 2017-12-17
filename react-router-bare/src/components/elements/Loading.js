import React, { Component } from "react";

import "./css/Loading.css";

class LoadingSingle extends Component {
  constructor() {
    super();
    this.state = {
      color: "#222222",
      fontSize: 18,
      translate3d: [0, 0, 0],
      rotate3d: [0, 0, 0],
      rotateAngle: 0,
    };
  }

  componentWillMount() {
    this.intervalId = setInterval(() => {
      const letters = "0123456789ABCDEF";
      const fontSize = Math.floor(Math.random() * 16) + 32;
      const color = [
        "#",
        ...["", "", "", "", "", ""].map(
          element => letters[Math.floor(Math.random() * 16)]
        ),
      ].join("");
      const translate3d = this.state.translate3d.map(
        val => Math.floor(Math.random() * 128) - 64
      );
      const rotate3d = this.state.rotate3d.map(val =>
        Math.floor(Math.random() * 2)
      );
      const rotateAngle = Math.floor(Math.random() * 360) - 180;

      this.setState({ color, fontSize, translate3d, rotate3d, rotateAngle });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { color, fontSize, rotateAngle } = this.state;
    const [x, y, z] = this.state.translate3d;
    const [rx, ry, rz] = this.state.rotate3d;

    return (
      <h1
        style={{
          color,
          fontSize,
          transform: `
            translate3d(${x}px, ${y}px, ${z}px)
            rotate3d(${rx}, ${ry}, ${rz}, ${rotateAngle}deg)
          `,
        }}
      >
        Loading...
      </h1>
    );
  }
}

export const Loading = () => {
  return (
    <section className="loading">
      <LoadingSingle />
      <LoadingSingle />
      <LoadingSingle />
      <LoadingSingle />
      <LoadingSingle />
    </section>
  );
};
