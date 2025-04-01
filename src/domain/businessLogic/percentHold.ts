export function calculatePercentHold(
  amount: number,
  totalSupply: number,
  decimals: number = 6,
): number {
  // Optionally, convert to human-readable values
  const human_readable_amount = amount / (10 * decimals);
  const human_readable_total_supply = totalSupply / (10 * decimals);

  // Calculate the holding percentage
  const percentage =
    (human_readable_amount / human_readable_total_supply) * 100;

  // This simplifies to (amount / totalSupply) * 100 since decimals cancel out
  const percentage_simplified = (amount / totalSupply) * 100;

  const result = (amount / totalSupply) * 100;
  // return percentage;
  return result;
}
