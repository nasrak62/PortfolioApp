import { objectHasEmpty } from "utils/objects";
import { postJson } from "utils/request";

export const createTransaction = async (params) => {
  const body = JSON.stringify({
    date: params?.date,
    type: params?.type,
    price: params?.price,
    description: params?.description,
  });

  if (objectHasEmpty(body)) {
    return { created: null, errors: "some inputs are empty" };
  }

  const result = await postJson(body, "/transactions");
  const { created: data, errors } = result;

  if (!errors) {
    return { created: data?.transaction, errors: errors };
  }

  return result;
};
