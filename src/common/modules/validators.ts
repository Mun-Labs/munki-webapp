import { Address } from "../../domain/types/Types";
import { PublicKey } from "@solana/web3.js";

export function isSolanaAddress(address: Address): boolean {
  try {
    const pubKey = new PublicKey(address);
    const is = PublicKey.isOnCurve(pubKey);
    return is;
  } catch {
    return false;
  }
}
