import "./NavBar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Navbar.Brand className="logo">
          <h1>
            <span>NetFlix</span>
          </h1>
        </Navbar.Brand>

        <Navbar.Text>
          <Link className="navbar" to={"/"}>
            Home
          </Link>
        </Navbar.Text>
      </Navbar>
    </>
  );
}

export default NavBar;
