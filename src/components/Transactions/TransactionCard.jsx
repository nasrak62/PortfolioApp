import React, { useCallback, useMemo, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { StyledTransactionCard, classes } from './TransactionCard.styles';
import { addNames } from '../../utils/strings';
import { ATTR } from './Transactions';
import { initialProperties } from './utils/initial';
import { handleUpdateClick } from './utils/updateTransaction';
import { handleDeleteClick } from './utils/deleteTransaction';
import AttributesInputs from './utils/AttributesInputs';
import { motion } from 'framer-motion';

import { getTransactions } from './utils/getTransactions';
import { CardContent, Card, CardActions, Button } from 'material-ui';
import ByCondition from 'components/utils/ByCondition';
import ShowWhen from 'components/utils/ShowWhen';
import { capitalize } from 'utils/lodash';

const TransactionCard = ({ transaction, setTransactions, setErrors }) => {
  const initialState = initialProperties(transaction);
  const [properties, setProperties] = useState(initialState);
  const [editMode, setEditMode] = useState(false);

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

  const updateEditMode = useCallback(() => {
    setEditMode((prev) => !prev);
  }, [setEditMode]);

  return (
    <StyledTransactionCard
      variants={variants}
      whileHover="hover"
      component={motion.div}
      className={classes.container}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {ATTR.map((attr) => {
            return (
              <ByCondition
                key={`${attr}-condition-label-container-key`}
                condition={editMode}
                ifTrue={
                  <AttributesInputs
                    key={`${attr}-AttributesInputs-label-container-key`}
                    properties={properties}
                    setProperties={setProperties}
                    attr={attr}
                    classes={classes}
                    value={properties[attr]?.value}
                  />
                }
                ifFalse={
                  <div className={classes.cardDisplayContainer}>
                    <p className={classes.cardDisplayText}>
                      {`${capitalize(attr)}:`}
                    </p>

                    <p className={classes.cardDisplayText}>
                      {`${properties[attr]?.value}`}
                    </p>
                  </div>
                }
              />
            );
          })}
          <ShowWhen condition={editMode}>
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
          </ShowWhen>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" onClick={updateEditMode}>
            {editMode ? 'Back' : 'Edit'}
          </Button>
        </CardActions>
      </Card>
    </StyledTransactionCard>
  );
};

export default TransactionCard;
