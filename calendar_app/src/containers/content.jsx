import React from 'react';
import { connect } from 'react-redux'
import PersonalForm from './content/personalForm';
import ItemList from './content/itemList';
import DatePicker from './content/datePicker';
import Content from '../components/content'

class ContentComponent extends React.Component {
  componentToRender(){
    switch(this.props.activeStep){
      case 0:
        return <ItemList />
      case 1:
        return <DatePicker />
      case 2:
        return <PersonalForm />
      default:
       return
    }
  }
  render(){
    return (
      <div>
        <Content>
          {this.componentToRender()}
        </Content>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    activeStep: state.step.activeStep,
  }
}

export default connect(mapStateToProps)(ContentComponent);
