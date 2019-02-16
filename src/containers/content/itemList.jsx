import React from 'react';
import ItemList from '../../components/content/itemList';
import { fetchItems } from '../../actions/item';
import { connect } from 'react-redux';

class ChooseItemContainer extends React.Component {
  componentDidMount(){
    this.props.fetchItems();
  }

  render(){
    return (
      <ItemList items={ this.props.items }/>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    items: state.item.items
  }
}

const mapDispatchToProps = {
  fetchItems,
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseItemContainer);
