import {useState, useEffect} from 'react'
import axios from 'axios';

const usePositionApi = (address) => {
    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=7d1768102c19ac3e1bd478f6b91c1cb9&query=${address}`;

    useEffect(() => {
      async function handler() {
          const response = await axios(API);
          const data = response.data.data[0];
          
          setMap(data);
      }
      handler();
  }, []);
  return map;
};


export default usePositionApi;