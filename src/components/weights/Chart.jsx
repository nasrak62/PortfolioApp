import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import capitalize from 'lodash/capitalize';
import { Paper } from 'material-ui';

import { DAYS } from 'utils/date';
import {
  getAverage,
  parseWeights,
  getMaxWeight,
  getMinWeight,
} from './utils/chart';

const Chart = ({ weights, windowSize, showKG, classes }) => {
  let data = weights ? parseWeights(weights) : [];

  if (showKG) {
    data = data.map((weight) => {
      return { ...weight, value: weight.value * 0.45 };
    });
  }

  const weekWeights = data?.length > DAYS.WEEK ? data.slice(DAYS.WEEK) : data;

  const monthWeights =
    data?.length > DAYS.MONTH ? data.slice(DAYS.MONTH) : data;

  const yearWeights = data?.length > DAYS.YEAR ? data.slice(DAYS.YEAR) : data;

  const dataSets = {
    week: weekWeights,
    month: monthWeights,
    year: yearWeights,
  };

  return (
    <div className={classes.chartsContainer}>
      {Object.keys(dataSets).map((type) => {
        let maxData = Number(getMaxWeight(dataSets[type]) / 2);

        maxData = 20;

        const minData = getMinWeight(dataSets[type]) / 2;

        return (
          <div
            key={`charts-by-date-${type}`}
            className={classes.chartContainer}>
            <div className={classes.chartTitleContainer}>
              <h1 className={classes.chartHeaderContainer}>
                This {capitalize(type)} Weights
              </h1>
            </div>

            <div className={classes.chartTitleContainer}>
              <h2 className={classes.chartHeaderContainer}>
                Average: {getAverage(dataSets[type])}
              </h2>
            </div>

            <Paper className={classes.chart} elevation={10}>
              <LineChart
                className={classes.chartInner}
                width={windowSize?.width * 0.8}
                height={windowSize?.height * 0.3}
                data={dataSets[type]}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ffffff" />
                <XAxis
                  className={classes.xAxis}
                  dataKey="name"
                  stroke="#ffffff"
                />
                <YAxis
                  className={classes.xAxis}
                  stroke="#ffffff"
                  type="number"
                  domain={[`dataMin - ${minData}`, `dataMax + ${maxData}`]}
                />
                <Tooltip />
              </LineChart>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
