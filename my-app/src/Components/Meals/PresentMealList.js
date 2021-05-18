import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./PresentMeal.module.css";
const Dummy_Meals = [
  {
    id: "001",
    name: "Biryani",
    description: "Finest Chicken grilled with butter what else you want !!",
    Price: 250,
  },
  {
    id: "002",
    name: "Mutton-keema",
    description:
      "Finest Mutton Gravey grilled with butter what can be more better !!",
    Price: 550,
  },
  {
    id: "003",
    name: "gaazar KA halwa",
    description:
      "Carrot,buttermixed in casew and nuts and aroma of nostalgia, just order at 120 ",
    Price: 120,
  },
  {
    id: "004",
    name: "Salads",
    description: "Health is wealth oder wisely",
    Price: 150,
  },
  {
    id: "005",
    name: "pizza",
    description: "O caro, real italian pizzzzzzzza",
    Price: 350,
  },
];
const PresentMeals = () => {
  const MealList = Dummy_Meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.Price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};
export default PresentMeals;
