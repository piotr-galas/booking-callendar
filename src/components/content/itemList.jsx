import React from 'react';
import Item from './item';

class ItemList extends React.Component {
  renderItems(){
    return this.props.items.map(item => <Item key={item.id} item={item}/>)
  }

  render(){
    return this.renderItems();
  }
}

export default ItemList;
