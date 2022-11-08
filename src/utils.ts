export function isNumeric(query: string) {
  return !isNaN(parseFloat(query));
}
