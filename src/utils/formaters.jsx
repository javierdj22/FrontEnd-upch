// src/utils/formatters.js
export const formatNumber = (num) => {
  if (num == null) return "-";
  return new Intl.NumberFormat().format(num);
};

// Formatea una fecha a formato dd/mm/yyyy
export const formatDate = (date) => {
  if (!(date instanceof Date)) date = new Date(date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
