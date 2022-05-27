import axios from "axios";
import { objectHasEmpty } from "./objects";
import isEmpty from "lodash/isEmpty";
import store from "store/Store";

export const toServer = (endPoint) => {
  let url = process.env.REACT_APP_SERVER_URL;
  return `${url}${endPoint}`;
};

const jsonHeaders = () => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (Boolean(store?.token && store?.loggedIn)) {
    headers.headers["Authorization"] = `Bearer ${store?.token}`;
  }

  return headers;
};

const handleSuccess = (result) => {
  if (result?.data) {
    return { created: result?.data, errors: null };
  }

  return { created: null, errors: "unknown error" };
};

const handleError = (e) => {
  const error = e?.response?.data?.msg || "unknown error";

  if (isEmpty(error)) {
    return { created: null, errors: "Unknown error" };
  }

  return { created: null, errors: error };
};

export const postJson = async (bodyJson, url) => {
  try {
    const result = await axios.post(toServer(url), bodyJson, jsonHeaders());
    return handleSuccess(result);
  } catch (e) {
    return handleError(e);
  }
};

export const patchJson = async (bodyJson, url) => {
  try {
    const result = await axios.patch(toServer(url), bodyJson, jsonHeaders());

    return handleSuccess(result);
  } catch (e) {
    return handleError(e);
  }
};

export const deleteJson = async (url) => {
  try {
    const result = await axios.delete(toServer(url), jsonHeaders());

    return handleSuccess(result);
  } catch (e) {
    return handleError(e);
  }
};

export const getJson = async (url) => {
  try {
    const result = await axios.get(toServer(url), jsonHeaders());

    return handleSuccess(result);
  } catch (e) {
    return handleError(e);
  }
};

export const getUpdatedData = async (setData, getNewData, setErrors) => {
  const { created: transactions, errors } = await getNewData();

  if (errors || !Boolean(transactions)) {
    return setErrors({
      toUser: "can't get data",
      fullError: errors,
    });
  }

  return setData(transactions);
};

export const handleRequestResult = async (
  result,
  setData,
  setErrors,
  getNewData = null
) => {
  if (result?.errors || objectHasEmpty(result?.created)) {
    return setErrors({
      toUser: "can't get data",
      fullError: result?.errors,
    });
  }

  if (getNewData !== null) {
    return await getUpdatedData(setData, getNewData, setErrors);
  }

  return result?.created;
};

export const urlFilters = (url, ...args) => {
  let finalUrl = `${url}?`;

  args.forEach((item) => {
    finalUrl = `${finalUrl}${item}&`;
  });

  return finalUrl.slice(0, -1);
};
