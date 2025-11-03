import { httpClient } from "./httpClient"; // Ajusta la ruta según tu estructura

const handleResponse = async (response) => {
  const contentType = response.headers.get("Content-Type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    throw new Error(data?.message || `Error ${response.status}: ${response.statusText}`);
  }

  return data;
};

export const getCars = async () => {
  const response = await httpClient("Cars", { method: "GET" });
  const result = await handleResponse(response);

  // Si viene con { success, data }, usa data
  // Si ya es un array directo, úsalo tal cual
  if (Array.isArray(result)) {
    return result;
  }

  if (result && Array.isArray(result.data)) {
    return result.data;
  }

  // En caso de formato inesperado, devuelve array vacío
  console.warn("⚠️ Formato de respuesta desconocido:", result);
  return [];
};

export const getCarById = async (id) => {
  const response = await httpClient(`Cars/${id}`, { method: "GET" });
  return handleResponse(response);
};

export const createCar = async (car) => {
  const response = await httpClient("Cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });
  return handleResponse(response);
};

export const updateCar = async (id, car) => {
  const response = await httpClient(`Cars/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });
  return handleResponse(response);
};

export const deleteCar = async (id) => {
  const response = await httpClient(`Cars/${id}`, { method: "DELETE" });
  return handleResponse(response);
};
