export function average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, num) => acc + num) / arr.length;
}
