import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/booking";
import NotFound from "./pages/404";
import "./App.css";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
