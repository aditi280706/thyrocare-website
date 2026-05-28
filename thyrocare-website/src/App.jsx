import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;