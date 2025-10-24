import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GamePlayer from "./pages/GamePlayer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:id" element={<GamePlayer />} />
      </Routes>
    </>
  );
}

export default App;
