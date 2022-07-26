import { objectHasEmpty } from 'utils/objects';
import { patchJson } from 'utils/request';

export const update = async (weight, id) => {
  const body = JSON.stringify({
    date: weight?.date?.value,
    pounds: weight?.pounds?.value,
  });

  if (objectHasEmpty(body)) {
    return { created: null, errors: 'some inputs are empty' };
  }

  const result = await patchJson(body, `/weights/${id}`);

  const { created: data, errors } = result;

  if (!errors) {
    return { created: data?.weight, errors: errors };
  }

  return result;
};
