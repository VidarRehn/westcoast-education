import { useState, useEffect } from 'react';

const useHttpClient = (endpoint, method, headers, body) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {

    const loadData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/${endpoint}`, {
          method: method ? method : 'GET',
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null
        });

        setData(await response.json());

      } catch (error) {
        setError(error);
      }
    };

    loadData();

  }, []);

  return { data, error };
};

export default useHttpClient;