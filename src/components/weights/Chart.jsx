import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import capitalize from 'lodash/capitalize';

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
                Average: {getAverage(dataSets[type]).toFixed(2)}
              </h2>
            </div>

            <ResponsiveContainer
              width="100%"
              height={windowSize?.height * 0.5 || 400}>
              <LineChart
                margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
                className={classes.chartInner}
                // width={windowSize?.width * 0.9}
                // height={windowSize?.height * 0.5}
                data={dataSets[type]}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ffffff" />
                <XAxis
                  className={classes.xAxis}
                  dataKey="name"
                  dy={10}
                  stroke="#ffffff"
                />
                <YAxis
                  className={classes.xAxis}
                  stroke="#ffffff"
                  type="number"
                  dx={-10}
                  domain={[`dataMin - ${minData}`, `dataMax + ${maxData}`]}
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
