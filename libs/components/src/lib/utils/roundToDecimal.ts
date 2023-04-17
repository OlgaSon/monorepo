export const roundToDecimal = (
  numberToRound: number,
  decimalPlaces = 3
): number => parseFloat(numberToRound.toFixed(decimalPlaces));
