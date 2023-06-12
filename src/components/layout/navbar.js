import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/icon.png";
import Close from "../../assets/close.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isVisible , setIsVisible] = useState(true);


  useEffect(() => {
    document.documentElement.classList.toggle('noscroll')
  },[show])

  useEffect(() => {
    let prev = window.scrollY;

    const handle = () => {
      const pos = window.scrollY;
      if(pos < prev){
        setIsVisible(true);
      }
      else{
        setIsVisible(false);
      }
      prev = pos;


    }

    window.addEventListener('scroll',handle);

    return () => window.removeEventListener('scroll',handle);
  },[])
  return (
    <header className={`${isVisible ? 'scroll' : ''}`}>
      <img src={Logo} alt="logo"></img>
      <div className="hamburger">
        <img onClick={() => setShow(old => !old)} src={Icon} alt="icon"></img>
      </div>
      <nav className={`${show ? 'show' : ''}`}>
        <h4>Home</h4>
        <h4>Our Menus</h4>
        <h4>About Us</h4>
        <button>Make a Reservation </button>
        <img  onClick={() => setShow(false)} src={Close} alt="icon"></img>
      </nav>
    </header>
  );
};

export default Navbar;
