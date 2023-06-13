import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/booking";
import BookingConfirmation from "./pages/bookingconfirmation";
import NotFound from "./pages/404";
import "./App.css";
import UpIcon from "./assets/up.png"
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { useState, useEffect } from "react";

function App() {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handle = () => {
      if(window.scrollY > 100) setButtonVisible(true)
      else setButtonVisible(false)
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  const returnOnTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <img src={UpIcon} alt="up" onClick={returnOnTop} id="returnOnTop" className={`${buttonVisible ? 'show' : ''}`}></img>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
