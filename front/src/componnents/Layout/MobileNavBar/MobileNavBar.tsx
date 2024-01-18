import { Link } from "react-router-dom";
import "./MobileNavBar.scss";

const MobileNavBar = () => {
  return (
    <nav className="nav-mobile">
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
