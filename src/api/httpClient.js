const BASE_URL = "https://zjm9qwzqrb.execute-api.us-east-1.amazonaws.com/dev/api";

export const httpClient = async (endpoint, options = {}) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP error ${res.status}: ${errorText}`);
  }

  return res.json();
};
