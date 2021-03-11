export const getHash = (hashSalt: unknown): string => (typeof hashSalt === "string" ? hashSalt : JSON.stringify(hashSalt));
