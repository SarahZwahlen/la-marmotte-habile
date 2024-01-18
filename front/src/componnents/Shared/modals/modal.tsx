import "./modal.scss";
interface modalProps {
  isOpen: boolean;
  children: string | JSX.Element | JSX.Element[];
}

const Modal = (props: modalProps) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal-layout">
          <div className="modal-content">{props.children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
