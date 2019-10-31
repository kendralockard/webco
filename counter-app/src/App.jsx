import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
// import ItemList from './components/itemList';

class App extends React.Component {
  // Class component needs a render method
  render() {
    return (
      <Title />
      <Subtitle />
    )
  }
}

export default App;
