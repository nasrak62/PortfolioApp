import React from 'react';
import { useCallback } from 'react';
import { destroyAndGetUpdatedData } from 'utils/crud';
import { foodsFromMeal, handleEditLink, onDeleteMeal } from './utils';
import FoodTable from 'components/utils/Table/Table';
import { handleFoodRowChange } from 'components/foods/utils';

const attrs = ['name', 'amount', 'proteins', 'carbs', 'fats'];

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
              <p>{meal?.name}</p>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
