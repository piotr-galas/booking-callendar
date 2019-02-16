import React from 'react';
import Divider from '@material-ui/core/Divider';

function Content(props) {
  return (
    <div>
      <Divider />
      { props.children }
    </div>
  );
}

export default Content;
