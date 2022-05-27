import { useCallback, useEffect, useState } from "react";
import { getJson, handleRequestResult } from "utils/request";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const getData = useCallback(async (url) => {
    const response = await getJson(url);

    const result = await handleRequestResult(response, setData, setError);

    setData(result?.transactions);
  }, []);

  useEffect(() => {
    getData(url);
  }, [getData, url]);

  return [data, setData, error, setError];
}
