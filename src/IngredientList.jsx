import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
    render() {
        return (
            <section>
                <h2 className="ingredient-list">Ingredient List</h2>
                <Ingredient />
            </section>
        );
    }
}

export default IngredientList;
