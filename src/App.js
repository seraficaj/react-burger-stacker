import React, { Component } from "react";
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

class App extends Component {
    render() {
        return (
            <>
                <main className="container">
                    <h1 className="is-center">Burgerstacker</h1>
                    <div className="row">
                        <IngredientList ingredients={this.props.ingredientList}/>
                        <BurgerPane />
                    </div>
                </main>
            </>
        );
    }
}

export default App;
