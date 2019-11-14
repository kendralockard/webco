import React from 'react';

class ItemList extends React.Component {
  render() {
    return (
      <ul>
        <li>
          {this.props.item.name} {this.props.item.price}
        </li>
      </ul>
    );
  }
}

export default ItemList;
