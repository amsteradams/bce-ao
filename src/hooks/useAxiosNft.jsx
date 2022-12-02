import axios from "axios";
import { useEffect, useState } from "react"

const useAxiosNFT = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/collections';
  axios.defaults.headers = {'X-BLOBR-KEY': '9pwW3CPYmKQDomeZK7CQvCHqHQNWwHhh'};
  

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

export default useAxiosNFT