import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1>Character Counter</h1>

      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        maxLength={200}
      />

      <p>
        Characters: <strong>{text.length}</strong> / 200
      </p>
    </div>
  );
}

export default App;
