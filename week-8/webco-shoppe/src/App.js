import React from 'react';
import Title from './Title';
import ItemList from './ItemList';

// App is a component
class App extends React.Component {
  state = {
    items: [
      { name: 'piano', price: 700 },
      { name: 'book', price: 2000 },
      { name: 'propaganda poster', price: 10 },
      { name: 'bottle', price: 1 }
    ]
  };

  render() {
    return (
      <div>
        <Title />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
