import React from 'react';
import PersonalForm from './personalForm';
import ChooseItem from './chooseItem';
import DatePicker from './datePicker';

class Content extends React.Component {
  get componentToRender(){
    const step = 2;
    switch(step){
      case 0:
        return <ChooseItem />
      case 1:
        return <DatePicker />
      case 2:
        return <PersonalForm />
    }
  }
  render(){
    return (
      <div>
          {this.componentToRender}
      </div>
    );
  }
}

export default Content;
