import React, { Component } from 'react';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

class App extends Component {
  render() { 
    return (
      <main>
        <h1>Burgerstacker</h1>
        <IngredientList />
        <BurgerPane />
      </main>
    );
  }
}
 
export default App;

