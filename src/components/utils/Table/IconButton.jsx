import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ classes, icon, onClick = null }) => {
  return (
    <button className={classes.column} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
