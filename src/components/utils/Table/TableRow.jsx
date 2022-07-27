import React, { useCallback } from 'react';
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import Input from 'components/utils/Input';
import { getInputType } from 'utils/input';
import IconButton from './IconButton';
import ShowWhen from '../ShowWhen';

const TableRow = ({
  item,
  classes,
  attrs,
  index,
  inputs,
  data,
  setData,
  onChange = null,
  onDelete = null,
  editLink = null,
  showDelete,
  showUpdate,
}) => {
  const deleteData = useCallback(
    (item) => {
      onDelete(item, setData);
    },
    [setData, onDelete],
  );

  const handleChange = useCallback(
    (e, index, attr) => {
      onChange(e, index, attr, data, setData);
    },
    [onChange, data, setData],
  );

  const textOrInput = useCallback(
    (attr, item, index) => {
      if (inputs?.[attr]) {
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
    [inputs, handleChange, classes],
  );

  return (
    <tr key={`food-item-${item?._id}`} className={classes.row}>
      {attrs?.map((attr) => {
        return (
          <td key={`td-${attr}-table`} className={classes.column}>
            {textOrInput(attr, item, index)}
          </td>
        );
      })}

      <ShowWhen condition={showUpdate}>
        <td className={classes.column}>
          <Link to={editLink(item?._id)}>
            <IconButton icon={faCircleCheck} classes={classes} />
          </Link>
        </td>
      </ShowWhen>

      <ShowWhen condition={showDelete}>
        <td className={classes.column}>
          <IconButton
            icon={faTrash}
            classes={classes}
            onClick={() => deleteData(item)}
          />
        </td>
      </ShowWhen>
    </tr>
  );
};

export default TableRow;
