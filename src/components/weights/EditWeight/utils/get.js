import { getJson } from 'utils/request';

export const getWeight = async (date) => {
  const result = await getJson(`/weights?by_date=${date}`);

  const { created: data, errors } = result;

  if (!errors) {
    return { created: data?.weights, errors: errors };
  }

  return result;
};
