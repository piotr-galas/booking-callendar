import React from 'react';
import ItemList from '../../components/content/itemList';
import { fetchItems, selectItem } from '../../actions/item';
import { connect } from 'react-redux';

class ChooseItemContainer extends React.Component {
  componentDidMount(){
    this.props.fetchItems();
  }

  handleSelectItem(item){
    this.props.selectItem(item)
  }

  render(){
    return (
      <ItemList
        items={ this.props.items }
        handleSelectItem={ this.handleSelectItem.bind(this)}
      />
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
  selectItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseItemContainer);
