import Card from "./card";
import "./menu.css";
const Menù = () => {
  return (
    <section className="menu">
      <div className="section-header">
        <h3>View Our Menus</h3>
        <button>View All</button>
      </div>
      <div className="lista-menu">
        <Card
          img={
            "https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/concept-of-tasty-food-salad-with-red-orange-top-2022-04-13-15-32-21-utc-660x740.jpg"
          }
          title={"Pizza"}
          description={
            "Roasted chicken, roasted sweet potatoes, apples, goat chees"
          }
          price={"5$"}
        />
        <Card
          img={
            "https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/concept-of-tasty-food-salad-with-red-orange-top-2022-04-13-15-32-21-utc-660x740.jpg"
          }
          title={"Pizza"}
          description={
            "Roasted chicken, roasted sweet potatoes, apples, goat chees"
          }
          price={"5$"}
        />
        <Card
          img={
            "https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/concept-of-tasty-food-salad-with-red-orange-top-2022-04-13-15-32-21-utc-660x740.jpg"
          }
          title={"Pizza"}
          description={
            "Roasted chicken, roasted sweet potatoes, apples, goat chees"
          }
          price={"5$"}
        />
      </div>
    </section>
  );
};

export default Menù;
