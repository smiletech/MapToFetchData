import React, { Component } from "react";
import Card from "./Card";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [{ namec: "navin" }, 2, 3, 4, 5, 6, 7, 8],
    };
  }
  render() {
    return (
      <div className="main">
        {this.state.arr.map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    );
  }
}
