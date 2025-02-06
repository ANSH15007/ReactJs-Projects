import { useEffect, useState } from "react"

function useFetch(url, options = {}) {

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(){
    setPending(true)
    try {
      const response = await fetch(url, {...options})
      if (!response.ok) throw new Error(response.statusText)

      const result = await response.json()
      setData(result)
      setError(null)
      setPending(false)

    } catch (e) {
      console.log(`${e}. Some Error occured`);
      setPending(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[url])

  return { data, error, pending } 
}

export default useFetch;
