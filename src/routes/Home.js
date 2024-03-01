import me from "../me.jpg";
import "../App.css";
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.updateOnMouseEnter = this.updateOnMouseEnter.bind(this);
    this.updateOnMouseLeave = this.updateOnMouseLeave.bind(this);
  }

  updateOnMouseEnter() {
    this.setState({ active: true });
  }

  updateOnMouseLeave() {
    this.setState({ active: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={me}
            style={{
              animation: ` ${
                !this.state.active ? "App-logo-spin infinite 20s linear" : null
              }`,
              height: `40vmin`,
            }}
            alt="logo"
          />
          <p>
            <br></br>
            <br></br>
            <br></br>I'm a Python engineer (5+ years) who knows JavaScript.{" "}
            <br></br>
            Want the spinning to stop?{" "}
            <a
              className="App-link"
              id="booking"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cal.com/she-SWE/hello?duration=30"
              onMouseEnter={this.updateOnMouseEnter}
              onMouseLeave={this.updateOnMouseLeave}
            >
              Hire me
            </a>
            !
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
