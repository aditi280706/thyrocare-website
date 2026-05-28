import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Address from "./pages/Address";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/address" element={<Address />} />
    </Routes>
  );
}

export default App;