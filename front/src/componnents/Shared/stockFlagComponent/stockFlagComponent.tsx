import "./stockFlagComponent.scss";
interface StockFlagComponentPros {
  quantity: number;
}
const StockFlagComponent = (props: StockFlagComponentPros) => {
  return (
    <p className={props.quantity ? "in-stock" : "out-of-stock"}>
      {props.quantity ? "En Stock" : "Non disponible"}
    </p>
  );
};

export default StockFlagComponent;
