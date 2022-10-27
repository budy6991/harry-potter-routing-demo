import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Houses } from "./components/Houses";

function App() {
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="houses" element={<Houses />} />
      </Routes>
    </div>
  );
}

export default App;
