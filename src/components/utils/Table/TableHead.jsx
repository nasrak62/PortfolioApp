import { capitalize } from "utils/lodash";
import React from "react";
import ShowWhen from "../ShowWhen";

const TableHead = ({ classes, attrs, showUpdate, showDelete }) => {
  return (
    <thead>
      <tr className={classes.row} width="100%">
        {attrs?.map((attr) => {
          return (
            <th key={`th-${attr}-table`} className={classes.column}>
              {capitalize(attr)}
            </th>
          );
        })}

        <ShowWhen condition={showUpdate}>
          <th className={classes.column}>Edit</th>
        </ShowWhen>

        <ShowWhen condition={showDelete}>
          <th className={classes.column}>Delete</th>
        </ShowWhen>
      </tr>
    </thead>
  );
};

export default TableHead;
