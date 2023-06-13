import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/icon.png";
import Close from "../../assets/close.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if(show) document.documentElement.classList.add("noscroll")
    else document.documentElement.classList.remove("noscroll")
  }, [show]);

  useEffect(() => {
    let prev = window.scrollY;

    const handle = () => {
      const pos = window.scrollY;
      if (pos < prev) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prev = pos;
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);
  return (
    <header className={`${isVisible ? "scroll" : ""}`}>
      <img src={Logo} alt="logo"></img>
      <div className="hamburger">
        <img onClick={() => setShow((old) => !old)} src={Icon} alt="icon"></img>
      </div>
      <nav className={`${show ? "show" : ""}`}>
        <li onClick={() => setShow(false)}>
          <Link to={"/"}>Home</Link>
        </li>
        <li onClick={() => setShow(false)}>
          <Link >Our Menus</Link>
        </li>
        <li onClick={() => setShow(false)}>
          <Link >About Us</Link>
        </li>
        <Link to={"/booking"}>
          <button onClick={() => setShow(false)}>Make a Reservation </button>
        </Link>
        <img onClick={() => setShow(false)} src={Close} alt="icon"></img>
      </nav>
    </header>
  );
};

export default Navbar;
