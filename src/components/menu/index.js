import Card from "./card";
import "./menu.css";

const Menù = () => {
  const foods = [
    {
      id: "food-001",
      title: "CAMPANELLA",
      description:
        "Pizza con Pomodoro San Marzano, Mozzarella di Bufala, Stracchino e Rucola",
      price: "11,50",
      image:
        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: "food-002",
      title: "Creamy Vegan Salad",
      description:
        "Roasted sweet potatoes, apples, cheese, kale, balsamic vinaigrette",
      price: "18",
      image:
        "https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/vegetarian-salad-2021-08-26-18-48-31-utc-660x740.jpg",
    },
    {
      id: "food-003",
      title: "MATTONELLA",
      description: "Dai Dai, Gelato alla Panna con Pinoli, Miele e Cacao",
      price: "7",
      image:
        "https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/concept-of-tasty-food-salad-with-red-orange-top-2022-04-13-15-32-21-utc-660x740.jpg",
    },
  ];
  return (
    <section className="menu">
      <div className="section-header">
        <h3>View Our Menus</h3>
        <button>View All</button>
      </div>
      <div className="lista-menu">
        {foods.map((food) => {
          return (
            <Card
              img={food.image}
              title={food.title}
              description={food.description}
              price={food.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Menù;
