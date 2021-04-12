import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "./NumberInput.css";

const NumberInput = () => (
  <div className="number-input">
    <button className="btn">
      <AiOutlinePlus />
    </button>
    <span>#</span>
    <button className="btn">
      <AiOutlineMinus />
    </button>
  </div>
);

export default NumberInput;
