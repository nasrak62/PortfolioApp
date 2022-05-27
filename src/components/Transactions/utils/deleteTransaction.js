import { deleteJson, handleRequestResult } from "utils/request";

export const deleteTransaction = async (id) => {
  return deleteJson(`/transactions/${id}`);
};

export const handleDeleteClick = async (
  transaction,
  setErrors,
  setTransactions,
  getNewData
) => {
  const result = await deleteTransaction(transaction?._id);

  return handleRequestResult(result, setTransactions, setErrors, getNewData);
};
