export const padNumber = (num: any) => {
  return (num < 10) ? '0' + num.toString() : num.toString();
}