import React from 'react';
import Divider from '@material-ui/core/Divider';

function PaperSheet(props) {
  return (
    <div>
      <Divider />
      { props.children }
    </div>
  );
}

export default PaperSheet;
