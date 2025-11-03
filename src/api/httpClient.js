const BASE_URL = "https://zjm9qwzqrb.execute-api.us-east-1.amazonaws.com/dev/api/";
// const BASE_URL = "https://localhost:7019/api/";

export const httpClient = (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  return fetch(url, {
    ...options,
    headers: {
      "Accept": "application/json",
      ...(options.headers || {}),
    },
  });
};
