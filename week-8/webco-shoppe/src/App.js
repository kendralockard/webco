import React from 'react';
import Title from './Title';
import Description from './Description';
import ItemList from './ItemList';
import Basket from './Basket';

// App is a component
class App extends React.Component {
  // instance variable
  state = {
    items: [
      { name: 'piano', price: 700 },
      { name: 'book', price: 400 },
      { name: 'bottle', price: 1 },
      { name: 'bean', price: 2 },
      { name: 'propaganda poster', price: 10 }
    ],
    size: 0
  };

  updateBasket = () => {
    // IMPORTANT
    // this.setState takes in a function. This function takes in the current state as
    // argument and returns updated state
    this.setState(currentState => ({ size: currentState.size + 1 }));
  };

  render() {
    const foo = 1;
    return (
      <div>
        <Title />
        <Description />
        <ItemList updateBasket={this.updateBasket} items={this.state.items} />
        <Basket size={this.state.size} />
      </div>
    );
  }
}

export default App;
