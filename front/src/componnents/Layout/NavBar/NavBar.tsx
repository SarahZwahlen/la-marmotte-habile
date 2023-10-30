import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <Link to={"/gallery"}>Galerie</Link>
        </li>
        <li>
          <Link to={"/about"}>À propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
