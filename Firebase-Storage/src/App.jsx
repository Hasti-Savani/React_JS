import Home from "./pages/Home";
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-center py-6">
        Firebase Storage App
      </h1>
      <Home />
    </div>
  );
}

export default App;