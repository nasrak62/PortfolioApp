import { createAuthRequest } from "utils/requestAuth";

export const login = async (user, setErrors) => {
  if (!user?.email || !user?.password) {
    return setErrors("please fill email and password");
  }

  return await createAuthRequest(user, "/login", setErrors);
};

export const initialState = {
  email: "",
  password: "",
};

export const inputTypes = Object.keys(initialState);
