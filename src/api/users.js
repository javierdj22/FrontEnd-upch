import { httpClient } from "./httpClient"; // Ajusta la ruta según tu proyecto

// Obtener todos los carros
export const getCars = async () => {
  return httpClient("Cars");
};

// Crear un nuevo carro
export const createCar = async (car) => {
  return httpClient("Cars", {
    method: "POST",
    body: JSON.stringify(car),
  });
};

// Actualizar un carro existente
export const updateCar = async (id, car) => {
  return httpClient(`Cars/${id}`, {
    method: "PUT",
    body: JSON.stringify(car),
  });
};

// Eliminar un carro
export const deleteCar = async (id) => {
  return httpClient(`Cars/${id}`, {
    method: "DELETE",
  });
};
