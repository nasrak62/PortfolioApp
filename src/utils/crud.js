import { objectHasEmpty } from "utils/objects";
import { deleteJson, getJson, patchJson, postJson } from "utils/request";

export const parseBody = (paramsObj) => {
  let body = {};
  Object.keys(paramsObj).forEach((key) => {
    body[key] = paramsObj[key];
  });

  return JSON.stringify(body);
};

const handleBody = (paramsObj) => {
  const body = parseBody(paramsObj);

  if (objectHasEmpty(body)) {
    return { created: null, errors: "some inputs are empty" };
  }

  return body;
};

const handleMethod = async (url, method, paramsObj) => {
  let body;

  if (method === "patch") {
    body = handleBody(paramsObj);
    return await patchJson(body, url);
  }
  if (method === "get") {
    return await getJson(url);
  }

  if (method === "post") {
    body = handleBody(paramsObj);
    return await postJson(body, url);
  }
  if (method === "delete") {
    return await deleteJson(url);
  }
};

export const crud = async (method, paramsObj = null, url, name) => {
  const result = handleMethod(url, method, paramsObj);

  const { created: data, errors } = result;

  if (!errors) {
    return { created: data?.[name], errors: errors };
  }

  return result;
};

export const create = async (paramsObj, url, name) => {
  return await crud("post", paramsObj, url, name);
};

export const update = async (paramsObj, url, name) => {
  return await crud("patch", paramsObj, url, name);
};

export const read = async (url, name) => {
  return await crud("get", url, name);
};

export const destroy = async (url, name) => {
  return await crud("delete", url, name);
};
