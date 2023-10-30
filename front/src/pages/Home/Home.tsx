import { Link } from "react-router-dom";
import "./Home.scss";
import serpentine from "../../assets/serpentine.jpg";

const Home = () => {
  return (
    <main>
      <h2>Accueil</h2>
      <section className="home-links">
        <article className="home-card">
          <Link to="/gallery">
            <h3>Découvrir le travail de La Marmotte</h3>
          </Link>
        </article>
        <article className="home-card">
          <Link to="/about">
            <h3>Mais qui est La Marmotte ?</h3>
          </Link>
        </article>
      </section>
      <section className="home-carrousel">
        <img src={serpentine} />
      </section>
    </main>
  );
};

export default Home;
