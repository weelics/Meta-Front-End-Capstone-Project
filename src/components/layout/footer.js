import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo2.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="callme">
        <h5>Call us on +45 453 3432</h5>
        <Link to={"/booking"}>
          <button>Make a Reservation </button>
        </Link>      </div>
      <div className="informations">
        <img src={Logo2} alt="logo2" width={80} />
        <div className="informatios-date">
          <p>Lake House, 13 Hanway, Square, London, UK</p>
          <p>
            Monday-Wednesday: 11a-9p Thursday-Saturday: 11a-10p Happy Hour:
            Everyday 2p-6p
          </p>
        </div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link>Our Menus</Link></li>
          <li><Link>About Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
