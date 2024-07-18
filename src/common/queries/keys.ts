export const storeRequestKeys = {
  all: ["storeRequests"] as const,
  list: () => [...storeRequestKeys.all, "list"] as const,
  details: () => [...storeRequestKeys.all, "detail"] as const,
  detail: (id: string) => [...storeRequestKeys.details(), id] as const,
};
