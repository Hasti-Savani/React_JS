import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>

      {page === "home" && <h2>Home Page</h2>}
      {page === "about" && <h2>About Page</h2>}
    </div>
  );
}

export default App;