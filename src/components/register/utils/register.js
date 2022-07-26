import { createAuthRequest } from 'utils/requestAuth';

export const register = async (user, setErrors) => {
  if (!user?.name || !user?.email || !user?.password) {
    return setErrors('please fill email, password and name');
  }

  return await createAuthRequest(user, '/register', setErrors);
};

export const initialState = {
  email: '',
  password: '',
  name: '',
};

export const inputTypes = Object.keys(initialState);
