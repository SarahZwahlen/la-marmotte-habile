import { Jewelry } from "../../types/jewellery.type";
import "./JewelleryCard.scss";
import serpentine from "../../assets/serpentine.jpg";
import { Link } from "react-router-dom";
interface JewelCardProps {
  jewel: Jewelry;
}
const JewelleryCard: React.FC<JewelCardProps> = ({ jewel }): JSX.Element => {
  return (
    <Link className="jewelry-card" to={`/jewelry/${jewel.id}`}>
      <div>
        <h3>{jewel.name}</h3>
        <img
          src={serpentine}
          className="jewelry-picture"
          alt="boucle d'oreille"
        />
      </div>
    </Link>
  );
};

export default JewelleryCard;
