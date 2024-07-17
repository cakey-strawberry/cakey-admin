export const storeRequestKeys = {
  storeRequest: ["storeRequest"] as const,
  storeRequests: (cursorId?: string) =>
    [...storeRequestKeys.storeRequest, cursorId] as const,
};
