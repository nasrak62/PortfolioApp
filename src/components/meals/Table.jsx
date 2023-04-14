import { useCallback } from 'react';
import { destroyAndGetUpdatedData } from 'utils/crud';
import { foodsFromMeal, handleEditLink, onDeleteMeal } from './utils';
import FoodTable from 'components/utils/Table/Table';
import { handleFoodRowChange } from 'components/foods/utils';
import { Button } from 'material-ui';
import { Link } from 'react-router-dom';

const attrs = ['name', 'calories', 'amount', 'proteins', 'carbs', 'fats'];

const Table = ({ data, setData, classes }) => {
  const deleteMeal = useCallback(
    async (meal) => {
      const deleteUrl = `/meals/${meal._id}`;
      const getUrl = '/meals';

      await destroyAndGetUpdatedData(
        deleteUrl,
        'meal',
        getUrl,
        'meals',
        setData,
      );
    },
    [setData],
  );

  return (
    <div className={classes.tableContainer}>
      {data?.map((meal) => {
        return (
          <div
            key={`meal-overview-${meal._id}`}
            className={classes.tableMealContainer}>
            <div>
              <h2>{meal?.name}</h2>
            </div>

            <div>
              <FoodTable
                data={foodsFromMeal(meal)}
                setData={setData}
                attrs={attrs}
                showDelete={false}
                showUpdate={false}
                onDelete={onDeleteMeal}
                onChange={handleFoodRowChange}
                editLink={handleEditLink}
              />
            </div>

            <div>
              <button onClick={() => deleteMeal(meal)}>Delete</button>
              <Link to={`/meals/edit/${meal._id}`} className={classes.link}>
                <Button variant="contained" className={classes.newMealButton}>
                  Edit
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
