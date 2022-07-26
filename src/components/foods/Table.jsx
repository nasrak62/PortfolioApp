import React, { useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { classes, StyledTable } from "./Table.style";
import { Link } from "react-router-dom";
import { destroyAndGetUpdatedData } from "utils/crud";
import { isEmpty } from "utils/lodash";
import Input from "components/utils/Input";
import { getInputType } from "utils/input";
import { recalculateValues } from "./utils";

const Table = ({ data, setData, inputs = null }) => {
  const handleChange = useCallback(
    (e, index, attr) => {
      const oldValue = data[index][attr];
      let newData = [...data];
      let newValue = e?.target?.value || Math.max(1, e?.target?.value);
      newValue = parseFloat(newValue);
      newData[index][attr] = newValue;

      if (attr === "amount") {
        newData[index] = recalculateValues(data[index], newValue, oldValue);
      }

      setData((prev) => {
        return newData;
      });
    },
    [data, setData]
  );

  const textOrInput = useCallback(
    (attr, item, index) => {
      if (Boolean(inputs?.[attr])) {
        console.log(item[attr]);
        return (
          <Input
            classes={classes}
            attr={attr}
            type={getInputType(attr)}
            value={item[attr]}
            onChange={(e) => handleChange(e, index, attr)}
            keyProp={`input-food-${attr}`}
          />
        );
      }

      return item[attr];
    },
    [inputs, handleChange]
  );

  const showData = useMemo(() => {
    console.log(data);
    return data?.map((item, index) => {
      return (
        <tr key={`food-item-${item?._id}`} className={classes.row}>
          <td className={classes.column}>{textOrInput("name", item, index)}</td>
          <td className={classes.column}>
            {textOrInput("amount", item, index)}
          </td>
          <td className={classes.column}>
            {textOrInput("calories", item, index)}
          </td>
          <td className={classes.column}>
            {textOrInput("proteins", item, index)}
          </td>
          <td className={classes.column}>
            {textOrInput("carbs", item, index)}
          </td>
          <td className={classes.column}>{textOrInput("fats", item, index)}</td>
          <td className={classes.column}>
            <Link to={`/foods/edit/${item?._id}`}>
              <button className={classes.column}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </Link>
          </td>
          <td className={classes.column}>
            <button
              className={classes.column}
              onClick={() =>
                destroyAndGetUpdatedData(
                  `/foods/${item?._id}`,
                  "food",
                  "/foods",
                  "foods",
                  setData
                )
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
      );
    });
  }, [data, setData, textOrInput]);

  if (isEmpty(data)) {
    return null;
  }

  return (
    <StyledTable className={classes.container}>
      <thead>
        <tr className={classes.row} width="100%">
          <th className={classes.column}>Name</th>
          <th className={classes.column}>Amount</th>
          <th className={classes.column}>Calories</th>
          <th className={classes.column}>Proteins</th>
          <th className={classes.column}>Carbs</th>
          <th className={classes.column}>Fats</th>
          <th className={classes.column}>Edit</th>
          <th className={classes.column}>Delete</th>
        </tr>
      </thead>
      <tbody>{showData}</tbody>
    </StyledTable>
  );
};

export default Table;
