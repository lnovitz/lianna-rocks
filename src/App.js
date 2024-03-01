import me from "./me.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p>
          <br></br>
          <br></br>
          <br></br>I'm a Python engineer (5 yrs) who knows JavaScript. <br></br>
          Want the spinning to stop?{" "}
          <a
            class="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cal.com/she-SWE/hello"
          >
            Hire me
          </a>
          !
        </p>
        <a
          className="App-secondary-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built in React
        </a>
      </header>
    </div>
  );
}

export default App;
