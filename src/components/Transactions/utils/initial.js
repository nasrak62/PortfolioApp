import { formatDate } from 'utils/date';

export const initialProperties = (transaction = null) => {
  if (!transaction) {
    return {
      date: {
        value: formatDate(Date.now()),
        validation: 'date',
      },
      description: {
        value: '',
        validation: 'text',
      },
      price: {
        value: 0,
        validation: 'numeric',
      },
      type: {
        value: 'Expense',
        validation: 'text',
      },
    };
  }

  return {
    date: {
      value: formatDate(transaction?.date) || formatDate(Date.now()),
      validation: 'date',
    },
    description: {
      value: transaction?.description || '',
      validation: 'text',
    },
    price: {
      value: transaction?.price || '',
      validation: 'numeric',
    },
    type: {
      value: transaction?.type || 'Expense',
      validation: 'text',
    },
  };
};

export const initialInputErrors = {
  date: '',
  description: '',
  price: '',
  type: '',
};

export const initialErrors = {
  date: {
    value: '',
    validation: 'date',
  },
  description: {
    value: '',
    validation: 'text',
  },
  price: {
    value: '',
    validation: 'numeric',
  },
  type: {
    value: '',
    validation: 'text',
  },
};
