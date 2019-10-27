import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
// import ItemList from './components/itemList';

class App extends React.Component {
  state = {
    item: 'Piano'
  };
  render() {
    return (
      <div className="App">
        <Title />
        <ul>
          <li className="item">Piano</li>
        </ul>
      </div>
    );
  }
}

export default App;
