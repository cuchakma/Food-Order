import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({ dispatcher }) => {
    return <Fragment>
                <MealsSummary/>
                <AvailableMeals dispatcher={dispatcher}/>
           </Fragment>
};

export default Meals;