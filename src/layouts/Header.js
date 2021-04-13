import { AiFillQuestionCircle } from "react-icons/ai";

import "./Header.css";

const Header = ({ setModal }) => (
  <header>
    <div className="logo">Breathing</div>
    <button
      onClick={() => setModal(true)}
      className="header-about-btn"
      id="header-about-btn"
    >
      <AiFillQuestionCircle className="about-btn-svg" />
    </button>
  </header>
);

export default Header;
