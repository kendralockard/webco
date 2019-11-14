import React from 'react';
import Title from './Title';
import Description from './Description';
import ItemList from './ItemList';

// App is a component
class App extends React.Component {
  // instance variable
  state = { item: { name: 'piano', price: 700 } };

  render() {
    const foo = 1;
    return (
      <div>
        <Title />
        <Description />
        <ItemList applePie="687" item={this.state.item} />
        {/* in ItemList, this.props.item is an object {name: 'piano', price: 700} */}
      </div>
    );
  }
}

export default App;
