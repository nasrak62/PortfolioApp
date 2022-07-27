import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Overview = ({ meal, classes }) => {
  const dataOverview = [];
  const dataPercentage = [];

  Object.keys(meal).forEach((attr) => {
    if (attr !== 'name' && attr !== 'foods') {
      dataOverview.push({ name: attr, value: meal[attr] });
    }

    if (attr !== 'name' && attr !== 'foods' && attr !== 'calories') {
      const amount = meal.amount || 1;
      console.log(amount);
      dataPercentage.push({ name: attr, value: meal[attr] / amount });
    }
  });

  return (
    <div className={classes.overviewContainer}>
      <div className={classes.overviewContainerTitle}>
        <p>Overview:</p>
      </div>

      <div className={classes.chartsContainer}>
        <div className={classes.chartContainer}>
          <ResponsiveContainer width={'100%'} height={300}>
            <BarChart
              width={500}
              height={300}
              data={dataOverview}
              margin={{
                top: 5,
                right: 10,
                left: 5,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="value" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={classes.chartContainer}>
          <ResponsiveContainer width={'100%'} height={300}>
            <BarChart
              width={500}
              height={300}
              data={dataPercentage}
              margin={{
                top: 5,
                right: 10,
                left: 5,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="value" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
