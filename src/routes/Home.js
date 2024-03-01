import me from "../me.jpg";
import "../App.css";
import React from "react";
import useSound from "use-sound";
import boopSfx from "../boop.mp3";

function Home() {
  const [play, { stop }] = useSound(boopSfx, { volume: 0.5 });
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={me}
          style={{
            animation: ` ${
              !isHovering ? "App-logo-spin infinite 20s linear" : null
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
            onMouseEnter={() => {
              setIsHovering(true);
              play();
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              stop();
            }}
          >
            Hire me
          </a>
          !
        </p>
      </header>
    </div>
  );
}

export default Home;
