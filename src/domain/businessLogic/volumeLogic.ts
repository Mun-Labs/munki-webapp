import { VolumeLabels } from "../types/BusinessLogicTypes";

/**
 * <$2B    = Low
 * $2B-$5B = Medium
 * $5B     = High
 */
export function volumeMapping(volume: number): VolumeLabels {
  if (volume < 2_000_000_000) {
    return VolumeLabels.Low;
  }
  if (volume >= 2_000_000_000 && volume < 5_000_000_000) {
    return VolumeLabels.Medium;
  }
  if (volume >= 5_000_000_000) {
    return VolumeLabels.High;
  }
  return VolumeLabels.Low;
}

export const volumeColorMapping: Record<VolumeLabels, string> = {
  [VolumeLabels.Low]: "#ee1b84",
  [VolumeLabels.Medium]: "#f35d7a",
  [VolumeLabels.High]: "#54f209",
};
