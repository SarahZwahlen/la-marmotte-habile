import { Link } from "react-router-dom";
import "./Home.scss";
import serpentine from "../../assets/serpentine.jpg";
import cornaplume from "../../assets/earing_cornaplume.jpg";
import IconSolid from "../../componnents/Shared/icon";
import Carousel from "../../componnents/Shared/carousels/Carousel";

const Home = () => {
  const images = [cornaplume, serpentine];

  return (
    <>
      <section className="home-carrousel">
        <Carousel images={images} carouselDelay={4000} isDiapo={true} />
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
    </>
  );
};

export default Home;
