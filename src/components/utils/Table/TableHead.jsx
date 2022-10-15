import { capitalize } from 'utils/lodash';
import React from 'react';
import ShowWhen from '../ShowWhen';

const TableHead = ({ classes, attrs, showUpdate, showDelete }) => {
  return (
    <thead className={classes.headContainer}>
      <tr className={classes.headRow} width="100%">
        {attrs?.map((attr) => {
          return (
            <th key={`th-${attr}-table`} className={classes.headColumn}>
              {capitalize(attr)}
            </th>
          );
        })}

        <ShowWhen condition={showUpdate}>
          <th className={classes.headColumn}>Edit</th>
        </ShowWhen>

        <ShowWhen condition={showDelete}>
          <th className={classes.headColumn}>Delete</th>
        </ShowWhen>
      </tr>
    </thead>
  );
};

export default TableHead;
