import React ,{useEffect,useState} from 'react'
import Card from "../../UI/Card";
import MealItem from "./MealItem";
import classes from "./PresentMeal.module.css";

const PresentMeals = () => {
  const [Meals,setMeals]=useState([]);
  const [isLoading,setisLoading]=useState(false);
  const [httpError,sethttpError]=useState(null);
  useEffect(()=>{
    const fetchMeals=async ()=>{
      setisLoading(true);
   const response =  await fetch('Api_databse',{});
   if(!response.ok){
     throw new Error('Something Went Wrong!');
   }
   const responseData= await response.json();
   const loadedMeals=[];

   for(const key in responseData){
     loadedMeals.push({
       id:key,
       name:responseData[key].name,
       description:responseData[key].description,
       Price:responseData[key].Price
     })
   }

   setMeals(loadedMeals);
   setisLoading(false);
    };
      fetchMeals().catch(error=>{
        setisLoading(false);
      sethttpError(error.message);
      })
      
    
  },[]);

if(isLoading)
{
  return<section className={classes.MealLoading}>
    <p>Loading...</p>
  </section>
}
if(httpError){
  return<section className={classes.MealError}>
  <p>{httpError}</p>
</section>
}

  const MealList = Meals.map((meal) => (
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
