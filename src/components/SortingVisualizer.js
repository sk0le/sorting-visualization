import React, { Component } from "react";
import bubbleSort from "../algorithms/bubbleSort";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      widthOfBars: 8,
      width: 0,
      numberOfBars: 100,
    };

    this.bubbleSortImp = this.bubbleSortImp.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateNumberOfBars = this.updateNumberOfBars.bind(this);
    this.randomArray = this.randomArray.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateNumberOfBars();
    window.addEventListener("resize", this.updateNumberOfBars);
    this.randomArray();
    window.addEventListener("resize", this.randomArray);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("resize", this.updateNumberOfBars);
    window.removeEventListener("resize", this.randomArray);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  updateNumberOfBars() {
    let num = Math.floor(this.state.width / 15);
    console.log("num ", num);
    this.setState({ numberOfBars: num });
  }

  randomArray() {
    let arr = [];
    for (let i = 0; i < this.state.numberOfBars; i++) {
      arr.push(this.randomNumber());
    }

    this.setState({ list: [...arr] });
  }

  randomNumber() {
    let randomIndex = Math.floor(Math.random() * 100) + 1;

    return randomIndex;
  }
  async bubbleSortImp(e) {
    e.preventDefault();

    let arr = this.state.list;
    let len = this.state.list.length;

    for (let i = 0; i < this.state.numberOfBars; i++) {
      await sleep(50);
      bubbleSort(arr, 0, len - 1);
      this.setState({ list: [...arr] });
    }
  }

  render() {
    return (
      <>
        <div className="sortingVisualizer">
          {this.state.list.map((number, index) => (
            <div
              key={index}
              style={{
                height: `${number}` * 5,
                width: this.state.widthOfBars,
              }}
              className="visualize"
            ></div>
          ))}
        </div>
        <div className="buttons">
          <button className="btn" onClick={this.bubbleSortImp}>
            Bubble Sort
          </button>
        </div>
      </>
    );
  }
}

export default SortingVisualizer;
