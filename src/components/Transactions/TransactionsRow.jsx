import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { StyledTransactionsRow, classes } from './TransactionsRow.styles';
import { addNames } from '../../utils/strings';
import { ATTR } from './Transactions';
import { initialProperties } from './utils/initial';
import { handleUpdateClick } from './utils/updateTransaction';
import { handleDeleteClick } from './utils/deleteTransaction';
import AttributesInputs from './utils/AttributesInputs';

import { getTransactions } from './utils/getTransactions';

const TransactionsRow = ({ transaction, setTransactions, setErrors }) => {
  const initialState = initialProperties(transaction);
  const [properties, setProperties] = useState(initialState);

  const canUpdate = useMemo(() => {
    return ATTR.some((attr) => {
      return initialState[attr]?.value !== properties[attr]?.value;
    });
  }, [initialState, properties]);

  const variants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <StyledTransactionsRow
      variants={variants}
      whileHover="hover"
      className={classes.container}>
      {ATTR.map((attr) => {
        return (
          <AttributesInputs
            key={`${attr}-AttributesInputs-label-container-key`}
            properties={properties}
            setProperties={setProperties}
            attr={attr}
            classes={classes}
            value={properties[attr]?.value}
          />
        );
      })}

      <div className={classes.buttonContainer}>
        <button
          className={addNames(classes.button, classes.updateButton)}
          disabled={!canUpdate}
          onClick={() =>
            handleUpdateClick(
              transaction,
              setErrors,
              properties,
              setTransactions,
              getTransactions,
            )
          }>
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>

        <button
          className={addNames(classes.button, classes.deleteButton)}
          onClick={() =>
            handleDeleteClick(
              transaction,
              setErrors,
              setTransactions,
              getTransactions,
            )
          }>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </StyledTransactionsRow>
  );
};

export default TransactionsRow;
