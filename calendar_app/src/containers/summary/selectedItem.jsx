import React from 'react'
import SelectedItemComponent from '../../components/summary/selectedItem'
import { connect } from 'react-redux'

class Summary extends React.Component{
  selectedItem(){
    return this.props.items.find((item) => {
      if(item.id === this.props.itemId){
        return item;
      }else{
        return null
      }
    })
  }

  render(){
    return <SelectedItemComponent selectedItem={this.selectedItem()} />
  }
}
const mapStateToProps = function(state){
  return {
    itemId: state.item.item_id,
    items: state.item.items
  }
}
export default connect(mapStateToProps)(Summary)
