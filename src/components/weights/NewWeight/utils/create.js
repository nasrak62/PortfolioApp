import { objectHasEmpty } from "utils/objects";
import { postJson } from "utils/request";

export const createNewWeight = async (weight) => {
  const body = JSON.stringify({
    date: weight?.date?.value,
    pounds: weight?.pounds?.value,
  });

  if (objectHasEmpty(body)) {
    return { created: null, errors: "some inputs are empty" };
  }

  const result = await postJson(body, "/weights");

  const { created: data, errors } = result;

  if (!errors) {
    return { created: data?.weight, errors: errors };
  }

  return result;
};
