import { objectHasEmpty } from 'utils/objects';
import { patchJson, handleRequestResult } from 'utils/request';
import { handleParams } from './requestParams';

export const updateTransaction = async (params, id) => {
  const body = JSON.stringify({
    date: params?.date,
    type: params?.type,
    price: params?.price,
    description: params?.description,
  });

  if (objectHasEmpty(body) || !id) {
    return { created: false, errors: 'some inputs are empty' };
  }

  return patchJson(body, `/transactions/${id}`);
};

export const handleUpdateClick = async (
  transaction,
  setErrors,
  properties,
  setData,
  getNewData,
) => {
  const params = handleParams(properties, setErrors);
  const result = await updateTransaction(params, transaction?._id);

  return handleRequestResult(result, setData, setErrors, getNewData);
};
