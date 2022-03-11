import React, { Component } from "react";
import Clear from "./Clear";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
    render() {
        return <section>
            <h2 className="burger-pane">BurgerPane</h2>
            <Ingredient />
            <Clear />
        </section>;
    }
}

export default BurgerPane;
