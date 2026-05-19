export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  // Obtener día, mes y año
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Mes empieza en 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
