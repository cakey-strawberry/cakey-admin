export const stasticsKeys = {
  all: ["stastics"] as const,
};

export const storeRequestKeys = {
  all: ["storeRequests"] as const,
  list: () => [...storeRequestKeys.all, "list"] as const,
  details: () => [...storeRequestKeys.all, "detail"] as const,
  detail: (id: string) => [...storeRequestKeys.details(), id] as const,
};
