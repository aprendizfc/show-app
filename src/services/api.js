const api = (function() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getAbsoluteUrl = (relativeUrl) => {
    return `${API_BASE_URL}${relativeUrl}?api_key=${API_KEY}`;
  }

  const get = (url, headers) => {
    const absoluteUrl = getAbsoluteUrl(url);
    return fetch(absoluteUrl, headers);
  }

  return {
    get: get,
  }
})();

export default api;
