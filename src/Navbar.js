import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="bar">
      <Link id="homeButton" to="/">
        Home
      </Link>
    </div>
  );
};
export default Navbar;
