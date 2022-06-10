import useFetchData from "hooks/fetchData";
import { useWindowSize } from "hooks/window";
import capitalize from "lodash/capitalize";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { DAYS } from "utils/date";
import { parseWeights } from "./utils/chart";

import { classes, StyledWeights } from "./Weights.style";

const Weights = () => {
  const url = "/weights";

  const [weights, setWeights, error, setErrors] = useFetchData(url, "weights");
  const windowSize = useWindowSize();

  const charts = useMemo(() => {
    const data = weights ? parseWeights(weights) : [];

    const weekWights = DAYS.WEEK > data.length ? data : data.slice(DAYS.WEEK);
    const monthWights = DAYS.WEEK > data.length ? data : data.slice(DAYS.MONTH);
    const yearWights = DAYS.WEEK > data.length ? data : data.slice(DAYS.YEAR);

    const dataSets = { week: weekWights, month: monthWights, year: yearWights };

    return (
      <div className={classes.chartsContainer}>
        {Object.keys(dataSets).map((type) => {
          return (
            <div
              key={`charts-by-date-${type}`}
              className={classes.chartContainer}
            >
              <div className={classes.chartTitleContainer}>
                <h1 className={classes.chartHeaderContainer}>
                  This {capitalize(type)} Weights
                </h1>
              </div>

              <div className={classes.chart}>
                <LineChart
                  className={classes.chartInner}
                  width={windowSize?.width * 0.8}
                  height={windowSize?.height * 0.3}
                  data={dataSets[type]}
                >
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  <CartesianGrid stroke="#ffffff" />
                  <XAxis
                    className={classes.xAxis}
                    dataKey="name"
                    stroke="#ffffff"
                  />
                  <YAxis className={classes.xAxis} stroke="#ffffff" />
                  <Tooltip />
                </LineChart>
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [weights, windowSize]);

  return (
    <StyledWeights
      className={classes.container}
      height={windowSize?.height * 0.8 || 1000}
    >
      <div className={classes.subContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Weights</h1>
        </div>
        <div className={classes.linkContainer}>
          <Link className={classes.link} to="/weights/new">
            Create New Weight
          </Link>
          <Link className={classes.link} to="/weights/edit">
            Update Weight
          </Link>
        </div>
        {charts}
      </div>
    </StyledWeights>
  );
};

export default Weights;
