import { Button } from 'material-ui';
import React from 'react';
import { Link } from 'react-router-dom';

const Options = ({ classes }) => {
  return (
    <div className={classes.optionsContainer}>
      <Link to="/meals/new" className={classes.link}>
        <Button variant="contained" className={classes.newMealButton}>
          Create New Meal
        </Button>
      </Link>
    </div>
  );
};

export default Options;
