import React from 'react';

class ItemList extends React.Component {
  render() {
    const items = this.props.items.map(str => <li>{str}</li>);
    return <ul>{items}</ul>;
  }
}

export default ItemList;
