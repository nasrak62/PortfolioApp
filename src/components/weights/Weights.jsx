import useFetchData from 'hooks/fetchData';
import { useWindowSize } from 'hooks/window';
import { FormControlLabel, Button, Checkbox } from 'material-ui';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';

import { classes, StyledWeights } from './Weights.style';

const Weights = () => {
  const url = '/weights';

  const [weights] = useFetchData(url, 'weights');
  const windowSize = useWindowSize();

  const [showKG, setShowKG] = useState(false);

  const handleCheck = useCallback(() => {
    setShowKG((prev) => !prev);
  });

  return (
    <StyledWeights
      className={classes.container}
      height={windowSize?.height * 0.8 || 1000}>
      <div className={classes.subContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Weights</h1>
        </div>
        <div className={classes.linkContainer}>
          <Link className={classes.link} to="/weights/new">
            <Button variant="contained" className={classes.button}>
              Create New Weight
            </Button>
          </Link>
          <Link className={classes.link} to="/weights/edit">
            <Button variant="contained" className={classes.button}>
              Update Weight
            </Button>
          </Link>
          <div className={classes.link}>
            <FormControlLabel
              className={classes.button}
              control={
                <Checkbox
                  checked={showKG}
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'control' }}
                  style={{
                    color: '#ffffff',
                  }}
                />
              }
              label="Show weight in KG"
            />
          </div>
        </div>
        <Chart
          weights={weights}
          windowSize={windowSize}
          showKG={showKG}
          classes={classes}
        />
      </div>
    </StyledWeights>
  );
};

export default Weights;
