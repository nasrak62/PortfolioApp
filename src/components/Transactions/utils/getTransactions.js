import { getJson } from "utils/request";
import { objectHasEmpty } from "utils/objects";

export const getTransactions = async () => {
  try {
    const requestResult = await getJson("/transactions");

    if (!requestResult?.errors && !objectHasEmpty(requestResult?.created)) {
      const transactions = requestResult?.created?.transactions;

      return { created: transactions, errors: null };
    }
  } catch (e) {
    return { created: null, errors: e?.errors };
  }
};
