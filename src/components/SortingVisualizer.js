import React, { Component } from "react";
import bubbleSort from "../algorithms/bubbleSort";
import Navbar from "./Navbar";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      numberOfBars: 10,
    };

    this.bubbleSortImp = this.bubbleSortImp.bind(this);
    this.randomArray = this.randomArray.bind(this);
    this.restartArray = this.restartArray.bind(this);
    this.onChangeNumberOfBars = this.onChangeNumberOfBars.bind(this);
  }

  componentDidMount() {
    this.randomArray();
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

  restartArray() {
    let arr = [];
    for (let i = 0; i < this.state.numberOfBars; i++) {
      arr.push(this.randomNumber());
    }

    this.setState(() => ({ list: [...arr] }));
  }

  onChangeNumberOfBars(event) {
    this.setState(
      {
        numberOfBars: event.target.value,
      },
      () => {
        this.randomArray();
      }
    );
  }

  async bubbleSortImp(e) {
    e.preventDefault();

    let arr = this.state.list;
    let len = this.state.list.length;

    for (let i = 0; i < this.state.numberOfBars; i++) {
      await sleep(50);
      bubbleSort(arr, 0, len - 1);
      this.setState(() => ({ list: [...arr] }));
    }
  }

  render() {
    console.log(this.state.widthOfBars);
    return (
      <>
        <Navbar />
        <div className="sortingVisualizer">
          {this.state.list.map((number, index) => (
            <div
              key={index}
              style={{
                height: number * 5,
                width: this.state.widthOfBars,
              }}
              className="visualize"
            ></div>
          ))}
        </div>
        <div className="buttons">
          <button className="btn" onClick={this.bubbleSortImp}>
            Sort
          </button>
          <button className="btn" onClick={this.restartArray}>
            Reset array
          </button>
          <div className="numberOfBarsInput">
            <label for="inputnumberofbars" className="labelforinput">
              Number Of Bars
            </label>
            <input
              type="text"
              placeholder="Please enter number of bars"
              className="inputnumberofbars"
              id="inputnumberofbars"
              defaultValue={this.state.numberOfBars}
              onChange={this.onChangeNumberOfBars}
            />
          </div>
        </div>
      </>
    );
  }
}

export default SortingVisualizer;
