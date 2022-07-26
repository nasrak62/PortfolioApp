import { capitalize } from '../../utils/strings';
import { ATTR } from './Transactions';
import { StyledTransactionsHeader, classes } from './TransactionsHeader.style';

const TransactionsHeader = ({ type }) => {
  return (
    <StyledTransactionsHeader className={classes.container}>
      {ATTR.map((item) => {
        return (
          <p className={classes.header} key={`${item}-${type}-header-p`}>
            {capitalize(item)}
          </p>
        );
      })}

      <p className={classes.header}>Options</p>
    </StyledTransactionsHeader>
  );
};

export default TransactionsHeader;
