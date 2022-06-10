import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { classes, StyledTable } from "./Table.style";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
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
      <tbody>
        {data.map((item) => {
          return (
            <tr key={`food-item-${item?._id}`} className={classes.row}>
              <td className={classes.column}>{item?.name}</td>
              <td className={classes.column}>{item?.amount}</td>
              <td className={classes.column}>{item?.calories}</td>
              <td className={classes.column}>{item?.proteins}</td>
              <td className={classes.column}>{item?.carbs}</td>
              <td className={classes.column}>{item?.fats}</td>
              <td className={classes.column}>
                <Link to={`/foods/edit/${item?._id}`}>
                  <button className={classes.column}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </button>
                </Link>
              </td>
              <td className={classes.column}>
                <button className={classes.column}>
                  {" "}
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
