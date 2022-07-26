import { useCallback, useEffect, useState } from 'react';
import { getJson, handleRequestResult } from 'utils/request';

export default function useFetchData(url, name, fn = null) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const getData = useCallback(
    async (url) => {
      const response = await getJson(url);

      const result = await handleRequestResult(response, setData, setError);

      if (Boolean(fn)) {
        const transformedData = fn(result?.[name]);

        return setData(transformedData);
      }

      setData(result?.[name]);
    },
    [name, fn],
  );

  useEffect(() => {
    getData(url);
  }, [getData, url]);

  return [data, setData, error, setError];
}
