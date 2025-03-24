export function calculatePercentHold(
  amount: number,
  totalSupply: number,
): number {
  const result = (amount / totalSupply) * 100;
  return result;
}
