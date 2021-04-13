import { useRef } from "react";
import TouchField from "../components/TouchField";

import "./Main.css";

const Main = () => {
  const tfRef = useRef();

  return (
    <main>
      <TouchField ref={tfRef} />
      <section className="controls">
        <button
          className="pill"
          onClick={() => tfRef.current && tfRef.current.start()}
        >
          Start
        </button>
        <button
          className="pill lesser"
          onClick={() => tfRef.current && tfRef.current.reset()}
        >
          Reset
        </button>
      </section>
    </main>
  );
};

export default Main;
