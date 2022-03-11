import React, { Component } from "react";
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

class App extends Component {
    state = {
        burgerIngredients: [],
    };

    addToBurger = (name, color) => {
        // add the selected ingredient to state.burgerIngredients
        // push new ingredient to the burger
        // WITH SPREAD OPERATOR
        // this.setState((prevState, props) => ({
        //     burgerIngredients: [
        //         ...prevState.burgerIngredients,
        //         { name, color },
        //     ],
        // }));
        let updatedBurgerList = this.state.burgerIngredients;
        updatedBurgerList.push({ name, color });
        this.setState({ burgerIngredients: updatedBurgerList });
    };

    render() {
        return (
            <>
                <main className="container">
                    <h1 className="is-center">Burgerstacker</h1>
                    <div className="row">
                        <IngredientList
                            addToBurger={this.addToBurger}
                            ingredients={this.props.ingredientList}
                        />
                        <BurgerPane
                            ingredients={this.state.burgerIngredients}
                        />
                    </div>
                </main>
            </>
        );
    }
}

export default App;
