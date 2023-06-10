import "./main.css";
import Food from "../../assets/food.jpg";
const Main = () => {
  return (
    <section className="main">
      <img src={Food} alt="imag" />
      <div className="message">
        <h2>Where every ingredient tells a story</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis, ab
          recusandae libero officiis dicta veniam quas doloremque expedita ex
          fugit fuga ducimus modi magnam esse minus optio? Consequuntur,
          excepturi?
        </p>
      </div>
    </section>
  );
};

export default Main;
