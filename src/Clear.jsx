import React, { Component } from "react";

class Clear extends Component {
    render() {
        return <button className="button primary" onClick={this.props.clearBurger}>Reset</button>;
    }
}

export default Clear;
