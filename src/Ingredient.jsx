import React, { Component } from "react";

class Ingredient extends Component {
    render() {
        return (
            <div
                className="card"
                style={{
                    backgroundColor: `${this.props.color}`,
                    color: "lightgrey",
                }}
                onClick={() => this.props.addToBurger(this.props.name, this.props.color)}
            >
                <header>
                    <h3>{this.props.name}</h3>
                </header>
            </div>
        );
    }
}

export default Ingredient;
