import Header from "./layouts/Header";
import Modal from "./layouts/Modal";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import { useState } from "react";

function App() {
  const [showModal, setModal] = useState(false);

  return (
    <div className="App">
      <Header setModal={setModal} />
      <Modal show={showModal} setModal={setModal} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
