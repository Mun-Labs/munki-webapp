import { Address } from "../../domain/types/Types";
import { PublicKey } from "@solana/web3.js";

export function isSolanaAddress(address: Address): boolean {
  try {
    const pubKey = new PublicKey(address);
    /*prettier-ignore*/ console.log('>>>> _ >>>> ~ validators.ts:7 ~ isSolanaAddress ~ pubKey:', pubKey)
    const is = PublicKey.isOnCurve(pubKey);
    /*prettier-ignore*/ console.log('>>>> _ >>>> ~ validators.ts:9 ~ isSolanaAddress ~ is:', is)
    return is;
  } catch {
    return false;
  }
}
