import React, { Component } from "react";
import Clear from "./Clear";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
    render() {
        const ingredients = this.props.ingredients.map((elem, idx) => {
            return (
                <Ingredient
                    ingredient={elem}
                    color={elem.color}
                    key={`key-${idx}`}
                    name={elem.name}
                    addToBurger={this.props.addToBurger}
                />
            );
        });
        return (
            <section className="col">
                <h2 className="is-center">BurgerPane</h2>
                {ingredients}
                <hr />
                <Clear />
            </section>
        );
    }
}

export default BurgerPane;
