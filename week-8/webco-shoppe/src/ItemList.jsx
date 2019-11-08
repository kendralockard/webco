import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    const items = this.props.items.map(item => <Item item={item} />);
    return <ul>{items}</ul>;
  }
}

export default ItemList;
