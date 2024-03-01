import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="bar">
      {/* <Link id="homeButton" to="/">
        Home
      </Link> */}
      <a
        href="https://github.com/lnovitz/lianna-rocks"
        target="_blank"
        rel="noreferrer"
        id="homeButton"
      >
        see code
      </a>
    </div>
  );
};
export default Navbar;
