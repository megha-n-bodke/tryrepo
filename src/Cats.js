import React from "react";

const Cat = ({ timeToEat }) => <p>{`I'm ${timeToEat ? "happy" : "sad"}`}</p>;

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeToEat: false };
  }

  render() {
    return (
      <div>
        <Cat timeToEat={this.state.timeToEat} />
        <button onClick={() => this.setState({ timeToEat: true })}>
          Time to eat!!
        </button>
      </div>
    );
  }
}

export default Cats;
