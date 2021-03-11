export const getHash = (hashSalt: unknown): string => {
  const hashSaltStr = typeof hashSalt === "string" ? hashSalt : JSON.stringify(hashSalt);
  return new Date().getTime().toString() + Math.random().toString() + hashSaltStr;
};
