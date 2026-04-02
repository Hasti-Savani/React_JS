import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <h1>React Modal Popup</h1>

      <button className="open-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text">Modal Title</h2>
            <p className="text">This is a modal popup using React click events.</p>

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
