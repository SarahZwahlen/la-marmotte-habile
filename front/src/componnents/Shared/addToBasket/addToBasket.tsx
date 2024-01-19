import BasketIcon from "../icons/basketIcon";

interface AddToBasketProps {
  isShort: boolean;
}

const AddToBasket = (props: AddToBasketProps) => {
  return (
    <button className="button-primary">
      <BasketIcon />
      {props.isShort ? "Ajouter" : "Ajouter au panier"}
    </button>
  );
};

export default AddToBasket;
