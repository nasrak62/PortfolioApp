import { initialInputErrors } from 'components/Transactions/utils/initial';

export const cleanMessages = (
  errors,
  showCreated,
  setShowCreated,
  setErrors,
  setInputErrors,
) => {
  if (showCreated) {
    setShowCreated(false);
  }

  if (errors !== '') {
    setErrors('');
  }

  setInputErrors(initialInputErrors);
};

export const delayedClean = (
  showCreated,
  setShowCreated,
  setErrors,
  setInputErrors,
) => {
  setShowCreated(true);
  setTimeout(() => {
    showCreated && setShowCreated(false);
    setErrors('');
    setInputErrors(initialInputErrors);
  }, 3000);
};
