import "./Header.scss";
import BasketIcon from "../../Shared/icons/basketIcon";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import { useState } from "react";
import Modal from "../../Shared/modals/modal";
import { Link } from "react-router-dom";

const Header = () => {
  const [isBasketModalOpen, setIsBasketModalOpen] = useState<boolean>(false);

  const openBasketModal = () => {
    setIsBasketModalOpen(true);
  };

  return (
    <>
      <header>
        <BurgerMenu />
        <Link to={"/"}>
          <h1 className="brand-name">La Marmotte Habile</h1>
        </Link>
        <button className="button-icon" onClick={openBasketModal}>
          <BasketIcon />
        </button>
      </header>
      <Modal isOpen={isBasketModalOpen}>
        <p>
          Cette fonctionnalité est en cours de développement. Pas de panique,
          elle sera bientôt prête !
        </p>
      </Modal>
    </>
  );
};  

export default Header;
