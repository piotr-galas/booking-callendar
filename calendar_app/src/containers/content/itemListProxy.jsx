import React from 'react';
import ItemList from '../../components/content/itemList';
import { fetchItems } from '../../actions/item';
import { connect } from 'react-redux';

class ItemListProxy extends React.Component {
  componentWillMount() {
    this.props.fetchItems(this.props.items)
  }

  render(){
    return (<ItemList
      items={ this.props.items }
      handleSelectItem={ this.props.handleSelectItem }
    />)
  }
}

const mapDispatchToProps = {
  fetchItems
}

export default connect(null, mapDispatchToProps)(ItemListProxy);
