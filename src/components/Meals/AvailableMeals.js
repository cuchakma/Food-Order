import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from '../styles/AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


const AvailableMeals = () => {
    return (
        <Card>
          <ul className={classes.meals}>
              {DUMMY_MEALS.map( ({id, price, name, description}, index) => <MealItem key={index} id={id} price={price} name={name} description={description}/> )}
          </ul>
        </Card>
    )
};


export default AvailableMeals;