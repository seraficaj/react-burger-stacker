import React, { Component } from "react";
import Clear from "./Clear";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
    render() {
        return (
            <section className="col">
                <h2 className="is-center">BurgerPane</h2>
                <Ingredient />
                <hr />
                <Clear />
            </section>
        );
    }
}

export default BurgerPane;
