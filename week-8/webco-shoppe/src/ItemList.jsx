import React from 'react';

class ItemList extends React.Component {
  render() {
    const items = this.props.items.map(str => (
      <div className="header item">
        <li>{str}</li>
      </div>
    ));
    return <ul>{items}</ul>;
  }
}

export default ItemList;
