import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map((elem, idx) => {
            return (
                <Ingredient
                    ingredient={elem}
                    color={elem.color}
                    key={`key-${idx}`}
                    name={elem.name}
                    addToBurger = {this.props.addToBurger}
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
