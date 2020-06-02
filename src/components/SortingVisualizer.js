import React, { Component } from "react";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.setState = { array: [] };
  }
  randomNumber() {
    let randomIndex = Math.floor(Math.random() * 100) + 1;

    return randomIndex;
  }

  render() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(this.randomNumber());
    }

    return (
      <>
        <div className="sortingVisualizer">
          {arr.map((number, index) => (
            <div style={{ height: number * 5 }} className="visualize"></div>
          ))}
        </div>
        <button className="btn">Sort</button>
      </>
    );
  }
}

export default SortingVisualizer;
