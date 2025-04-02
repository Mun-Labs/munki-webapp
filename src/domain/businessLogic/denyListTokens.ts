export const DENY_LIST_TOKENS: string[] = [
  "Wrapped solana",
  "Solana",
  "Wrapped BTC (Wormhole)",
  "Wrapped Ether (Wormhole)",
  "SPX6900 (Wormhole)",
  "Jupiter",
  "Jito",
  "Lightchain AI",
  "Movement",
  "Kamino",
  "Ray",
  "Raydium",
  "Metaplex",
  "Binance Staked SOL",
];

// Create a Set for O(1) lookups
const denyListTokensSet = new Set(DENY_LIST_TOKENS);

/**
 * Filters out tokens that are in the deny list
 * @param tokenAddresses Array of token addresses to filter
 * @returns Array of token addresses not in the deny list
 */
// export function filterDenyListTokens(tokenAddresses: string[]): string[] {
export function filterDenyListTokens<T extends { name: string }>(
  tokenAddresses: T[] | undefined,
): T[] {
  if (!tokenAddresses) return [];
  return tokenAddresses.filter((item) => !denyListTokensSet.has(item.name));
}
