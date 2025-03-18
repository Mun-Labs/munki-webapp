export function generateId(): string {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function generateAddress(): string {
  const generated = "xxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  const result = `0x${generated}`;
  return result;
}

function simpleHash(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const value = hash.toString(16).replace(/-/g, "");
  return value;
}

export function generateAddressWithSeed(seed: string): string {
  const hash = simpleHash(seed);
  const generated = hash.slice(0, 19).replace(/[xy]/g, function (c) {
    const r = parseInt(hash.slice(0, 2), 16),
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  const result = `0x${generated}`;
  return result;
}
