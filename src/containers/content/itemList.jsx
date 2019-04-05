import React from 'react';
import ItemList from '../../components/content/itemList';
import { fetchItems, selectItem } from '../../actions/item';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_ITEMS = gql`
  {
    items{
      id
      name
      description
      fullName
      imageUrl
    }
  }
`;

class ChooseItemContainer extends React.Component {
  handleSelectItem(item){
    this.props.selectItem(item)
  }

  render(){
    return (
      <Query query={GET_ITEMS}>
        {({data: items}, loading) => {

           if (loading || !items.items) {
             return <div>Loading ...</div>;
           }
          return (<ItemList
            items={ items.items }
            handleSelectItem={ this.handleSelectItem.bind(this)}
          />)
        }}
      </Query>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    items: state.item.items
  }
}

const mapDispatchToProps = {
  selectItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseItemContainer);
