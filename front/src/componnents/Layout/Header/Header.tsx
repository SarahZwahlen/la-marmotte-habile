import "./Header.scss";
import BasketIcon from "../../Shared/icons/basketIcon";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import { useState } from "react";
import Modal from "../../Shared/modals/modal";
import { Link } from "react-router-dom";
import CloseIcon from "../../Shared/icons/closeIcon";

const Header = () => {
  const [isBasketModalOpen, setIsBasketModalOpen] = useState<boolean>(false);

  const handleBasketModalOpening = (isOpen: boolean) => {
    setIsBasketModalOpen(isOpen);
  };

  return (
    <>
      <header>
        <BurgerMenu />
        <Link to={"/"}>
          <h1 className="brand-name">La Marmotte Habile</h1>
        </Link>
        <button
          className="button-icon"
          onClick={() => handleBasketModalOpening(true)}
        >
          <BasketIcon />
        </button>
      </header>
      <Modal isOpen={isBasketModalOpen}>
        <button
          onClick={() => handleBasketModalOpening(false)}
          className="button-icon"
        >
          <CloseIcon />
        </button>
        <p>
          Cette fonctionnalité est en cours de développement. Pas de panique,
          elle sera bientôt prête !
        </p>
      </Modal>
    </>
  );
};

export default Header;
