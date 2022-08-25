import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import isEqual from 'lodash/isEqual';

import useFetchData from '../../hooks/fetchData';
import ShowWhen from 'components/utils/ShowWhen';
import TransactionsRow from './TransactionsRow';
import TransactionsHeader from './TransactionsHeader';
import { addNames } from '../../utils/strings';
import { StyledTransactions, classes } from './Transactions.styles';
import Select from 'components/utils/Select';
import { MONTHS, todayMonth, todayYear, YEARS } from 'utils/date';
import { urlFilters } from 'utils/request';
import { useWindowSize } from 'hooks/window';
import ByCondition from 'components/utils/ByCondition';
import TransactionCard from './TransactionCard';

export const ATTR = ['date', 'description', 'price', 'type'];
export const TRANSACTIONS_TYPE = ['Expense', 'Income'];

const Transactions = () => {
  const [month, setMonth] = useState(todayMonth());
  const [year, setYear] = useState(todayYear());

  const url = urlFilters(
    '/transactions',
    `by_date=${year}-${month.value}-[0-9]{2}`,
  );

  const [transactions, setTransactions, error, setErrors] = useFetchData(
    url,
    'transactions',
  );

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;

  const [displayType, setDisplayType] = useState(TRANSACTIONS_TYPE[0]);

  const showError = error?.toUser || !transactions;

  const expenses = useMemo(() => {
    if (showError) {
      return [];
    }

    return transactions.filter((item) => item?.type === 'Expense');
  }, [showError, transactions]);

  const incomes = useMemo(() => {
    if (showError) {
      return [];
    }

    return transactions.filter((item) => item?.type === 'Income');
  }, [showError, transactions]);

  const displayList = displayType === TRANSACTIONS_TYPE[0] ? expenses : incomes;

  const total = useMemo(() => {
    let sum = 0;

    displayList.forEach((item) => {
      sum += item?.price;
    });

    return sum;
  }, [displayList]);

  const variants = {
    hover: {
      scale: [1, 2, 2, 2, 2, 2, 1],
      rotate: [0, 270, 360, 360, 360, 360, 0],
      borderRadius: ['0%', '50%', '50%', '50%', '50%', '50%', '0%'],
    },
  };

  const selectChange = useCallback(
    (e, attr, options) => {
      if (isEqual(options, Object.keys(MONTHS))) {
        return setMonth({
          value: MONTHS[e?.target?.value] || month.value,
          display: e?.target?.value || month.display,
        });
      }

      if (isEqual(options, TRANSACTIONS_TYPE)) {
        return setDisplayType(e?.target?.value || displayType);
      }

      if (isEqual(options, YEARS)) {
        return setYear(e?.target?.value || year);
      }
    },
    [month, displayType, year],
  );

  return (
    <StyledTransactions className={classes.container}>
      <div className={classes.headerContainer}>
        <h1 className={addNames(classes.title, classes.header)}>
          Transactions
        </h1>
        <Link to="/transactions/new" className={classes.link}>
          <motion.button
            variants={variants}
            whileHover="hover"
            className={classes.button}>
            <p>Create New Transaction</p>
          </motion.button>
        </Link>

        <div className={classes.infoContainer}>
          <Select
            value={displayType}
            attr={displayType}
            handleChange={selectChange}
            classes={classes}
            options={TRANSACTIONS_TYPE}
          />

          <p className={classes.total}>Total: {total}</p>

          <Select
            value={month.display}
            attr={month.display}
            handleChange={selectChange}
            classes={classes}
            options={Object.keys(MONTHS)}
          />

          <Select
            value={year}
            attr={year}
            handleChange={selectChange}
            classes={classes}
            options={YEARS}
          />
        </div>

        <ShowWhen condition={showError}>
          <p className={classes.error}>{error?.toUser}</p>

          <ShowWhen condition={Boolean(error?.fullError?.message)}>
            <p className={classes.error}>{error?.fullError?.message}</p>
          </ShowWhen>
        </ShowWhen>
      </div>

      <div className={classes.body}>
        <div className={classes.expensesContainer}>
          <h1 className={addNames(classes.title, classes.subTitle)}>
            {displayType}
          </h1>
          <TransactionsHeader type={displayType} />
          {displayList?.map((item) => {
            return (
              <ByCondition
                key={`transactions-condition-${displayType}-${item?._id}`}
                condition={isMobile}
                ifFalse={
                  <TransactionsRow
                    key={`transactions-row-${displayType}-${item?._id}`}
                    transaction={item}
                    setTransactions={setTransactions}
                    setErrors={setErrors}
                  />
                }
                ifTrue={
                  <TransactionCard
                    key={`transactions-row-${displayType}-${item?._id}`}
                    transaction={item}
                    setTransactions={setTransactions}
                    setErrors={setErrors}
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </StyledTransactions>
  );
};

export default Transactions;
