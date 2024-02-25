import { Link } from "react-router-dom";
import "./MobileNavBar.scss";

interface MobileNavBarInterface {
  handleNavIsOpen: (isOpen: boolean) => void;
}

const MobileNavBar = (props: MobileNavBarInterface) => {
  return (
    <nav
      className="nav-mobile"
      onMouseLeave={() => {
        props.handleNavIsOpen(false);
      }}
    >
      <Link to={"/"}>Accueil</Link>
      <Link to={"/products"}>Tous les produits</Link>
      <Link to={"/about"}>La Marmotte Habile</Link>
      <Link to={"/"}>Bijoux</Link>
      <Link to={"/"}>Couture</Link>
      <Link to={"/"}>Tricot et crochet</Link>
      <Link to={"/"}>Contact</Link>
      <Link to={"/"}>Se connecter</Link>
      <Link to={"/"}>Mon compte</Link>
      <Link to={"/"}>Panier</Link>
      <Link to={"/"}>Déconnexion</Link>
    </nav>
  );
};

export default MobileNavBar;
