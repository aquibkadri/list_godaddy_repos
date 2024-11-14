export const callAPIandSetState = async (url, setFn) => {
    const API_URL = url;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      Array.isArray(data) ? setFn(data) : setFn(Object.keys(data))

    } catch (error) {
      console.log(error)
    }
}