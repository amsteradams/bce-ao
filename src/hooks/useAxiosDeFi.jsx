import axios from "axios";
import { useEffect, useState } from "react"

const useAxiosDeFi = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.llama.fi';

  const fetchData = async (param) => {
    try {
        setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response, loading, error
  }
}

export default useAxiosDeFi