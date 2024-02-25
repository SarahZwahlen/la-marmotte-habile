import { useState } from "react";
import BurgerMenuIcon from "../Shared/icons/burgerIcon";
import MobileNavBar from "../Layout/MobileNavBar/MobileNavBar";

const BurgerMenu = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const handleNavOpening = (isOpen: boolean) => {
    setNavIsOpen(isOpen);
  };

  return (
    <div>
      <button
        onClick={() => handleNavOpening(!navIsOpen)}
        className="button-icon"
      >
        <BurgerMenuIcon />
      </button>
      {navIsOpen && <MobileNavBar handleNavIsOpen={handleNavOpening} />}
    </div>
  );
};

export default BurgerMenu;
