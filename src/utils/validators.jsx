// Valida que un string no esté vacío ni solo con espacios
export const isNotEmpty = (str) => typeof str === "string" && str.trim().length > 0;

// Valida que un número sea positivo
export const isPositiveNumber = (num) => typeof num === "number" && num > 0;

// Valida que un año sea válido (por ejemplo, entre 1900 y el año actual)
export const isValidYear = (year) => {
  const currentYear = new Date().getFullYear();
  return Number.isInteger(year) && year >= 1900 && year <= currentYear;
};
