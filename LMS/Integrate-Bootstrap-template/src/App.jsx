import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="container mt-5 text-center">
        <h1>Main Content Area</h1>
      </div>
    </>
  );
}

export default App;