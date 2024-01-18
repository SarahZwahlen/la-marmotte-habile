import "./Header.scss";
import {
  IconDefinition,
  IconLookup,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import BasketIcon from "../../Shared/icons/basketIcon";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

const Header = () => {
  const basketLookup: IconLookup = {
    prefix: "fas",
    iconName: "basket-shopping",
  };
  const basketIconDefinition: IconDefinition = findIconDefinition(basketLookup);
  return (
    <header>
      <BurgerMenu />
      <h1 className="brand-name">La Marmotte Habile</h1>
      <button>
        <BasketIcon />
      </button>
    </header>
  );
};

export default Header;
