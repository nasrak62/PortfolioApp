import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';

const Options = ({ classes }) => {
  return (
    <div className={classes.optionsContainer}>
      <Link className={classes.link} to="/foods/new">
        <Button variant="contained" className={classes.button}>
          Create New Food
        </Button>
      </Link>
    </div>
  );
};

export default Options;
