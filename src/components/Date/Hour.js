import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }

  render() {
    return <p className="App-clock">{this.state.time}</p>;
  }
}

export default Clock;
