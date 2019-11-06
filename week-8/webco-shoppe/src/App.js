import React from 'react';
import Title from './Title';
import ItemList from './ItemList';

// App is a component
class App extends React.Component {
  state = { items: ['piano', 'book', 'propaganda poster', 'piano'] };

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
