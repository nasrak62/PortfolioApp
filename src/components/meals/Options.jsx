import React from 'react';
import { Link } from 'react-router-dom';

const Options = ({ classes }) => {
  return (
    <div className={classes.optionsContainer}>
      <Link to="/meals/new">
        <button>Create New Meal</button>
      </Link>
    </div>
  );
};

export default Options;
