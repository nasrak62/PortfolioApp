import { objectHasEmpty } from 'utils/objects';
import { postJson } from './request';

const handleResult = async (result, setErrors) => {
  if (result?.errors || objectHasEmpty(result?.created)) {
    return setErrors(result?.errors);
  }

  const { token } = result?.created;

  if (token) {
    return token;
  }

  return setErrors('cant get token');
};

export const createAuthRequest = async (user, url, setErrors) => {
  const result = await postJson({ ...user }, url);

  return await handleResult(result, setErrors);
};
