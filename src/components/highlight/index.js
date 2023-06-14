import "./highlight.css";
const HighLight = () => {
  return (
    <section className="gallery">
      <div className="gallery-header">
        <h5>Highlight</h5>
        <h3>The magic of the kitchen</h3>
        <p>
          On cold winter nights, I like to brighten up our dinner table with a
          big, colorful mix of root veggies and hearty greens. On beautiful,
          warm days.
        </p>
      </div>
      <div className="gallery-images">
        <img
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="food"
        />
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
        />

        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
        />
      </div>
    </section>
  );
};

export default HighLight;
