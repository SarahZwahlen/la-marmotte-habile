import { Jewelry } from "../../types/jewellery.type";
import "./JewelleryCard.scss";
import serpentine from "../../assets/serpentine.jpg";
import { Link } from "react-router-dom";
interface JewelCardProps {
  jewel: Jewelry;
}
const JewelleryCard: React.FC<JewelCardProps> = ({ jewel }): JSX.Element => {
  return (
    <div className="jewelry-card">
      <Link to={`/jewelry/${jewel.id}`}>
        <img src={serpentine} className="jewelry-picture" />
        {/* <h3>{jewel.name}</h3> */}
      </Link>
      <h3>{jewel.name}</h3>
    </div>
  );
};

export default JewelleryCard;
