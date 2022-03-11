import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map((elem, idx) => {
            return (
                <Ingredient
                    ingredient={elem}
                    name={elem.name}
                    color={elem.color}
                    key={`key-${idx}`}
                />
            );
        });
        return (
            <section className="col">
                <h2 className="is-center">Ingredient List</h2>
                {ingredients}
            </section>
        );
    }
}

export default IngredientList;
