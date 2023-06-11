import "./menu.css";
const Card = ({ img, title, description, price }) => {
  return (
    <article className="card">
      <img src={img} alt="img" />
      <div className="header">
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>Price: {price}$</h5>
      </div>
    </article>
  );
};

export default Card;
