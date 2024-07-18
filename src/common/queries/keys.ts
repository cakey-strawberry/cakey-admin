export const storeRequestKeys = {
  storeRequest: ["storeRequest"] as const,
  storeRequestById: (storeRequestId: string) =>
    [...storeRequestKeys.storeRequest, storeRequestId] as const,
  storeRequests: (cursorId?: string) =>
    [...storeRequestKeys.storeRequest, cursorId] as const,
};
