import { Link } from "react-router-dom";
import "./NotFound.scss";


const NotFound = () => {
  return (
    <main className="not-found">
      <p>Cette page n'existe pas ou n'est pas accessible.</p>
      <p>
        Mais ce n'est pas très grave parce qu'
        <Link to="/gallery">
          ICI vous pouvez découvrir le travail de La Marmotte !
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
