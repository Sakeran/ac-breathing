import "./Modal.css";

const Modal = ({ show, setModal }) => {
  let className = "modal";
  if (show) {
    className += " show";
  }

  return (
    <section
      onClick={() => setModal(false)}
      className={className}
      aria-hidden={!show}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>
          Square Breathing is a breathing technique used to relieve stress and
          increase concentration.
        </p>
        <p>
          This application acts as a visualizer to help sync your breathing to
          the correct 4-4-4-4 pattern.
        </p>
        <p>
          <a href="https://www.healthline.com/health/box-breathing">This</a>{" "}
          article can provide a more detailed explanation.
        </p>
      </div>
    </section>
  );
};

export default Modal;
