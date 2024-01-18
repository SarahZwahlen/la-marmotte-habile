import { Link } from "react-router-dom";
import "./Home.scss";
import serpentine from "../../assets/serpentine.jpg";
import IconSolid from "../../componnents/Shared/icon";

const Home = () => {
  return (
    <main>
      <section className="home-carrousel">
        <img src={serpentine} />
        <div className="carrousel-nav-buttons">
          <button className="button-icon">
            <IconSolid iconName="chevron-left" />
          </button>
          <button className="button-icon">
            <IconSolid iconName="chevron-right" />
          </button>
        </div>
        <Link to="products" className="button-primary home-button-all-products">
          <IconSolid iconName="chevron-right" />
          Voir tous les produits
        </Link>
      </section>
      <section className="home-links">
        <article className="home-card">
          <h3>Mais qui est La Marmotte ?</h3>
          <Link to="/about" className="button-secondary">
            <IconSolid iconName="chevron-right" />
            Découvrir
          </Link>
        </article>
        <article className="home-card">
          <Link to="/">
            <h3>Les boucles d'oreilles</h3>
          </Link>
        </article>
        <article className="home-card">
          <Link to="/">
            <h3>Les bracelets</h3>
          </Link>
        </article>
        <article className="home-card">
          <Link to="/">
            <h3>Les chaussettes</h3>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default Home;
