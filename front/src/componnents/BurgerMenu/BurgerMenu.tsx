import { useState } from "react";
import BurgerMenuIcon from "../Shared/icons/burgerIcon";
import MobileNavBar from "../Layout/MobileNavBar/MobileNavBar";

const BurgerMenu = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setNavIsOpen(!navIsOpen)} className="button-icon">
        <BurgerMenuIcon />
      </button>
      {navIsOpen && <MobileNavBar />}
    </div>
  );
};

export default BurgerMenu;
