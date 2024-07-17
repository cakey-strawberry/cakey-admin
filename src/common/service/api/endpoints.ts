export const AuthEndpointSet = {
  admin: {
    signIn: {
      method: "POST",
      permission: "private",
      path: "/api/v1/auth/admin",
    },
  },
} as const;

export const AdminEndpointSet = {
  storeRequest: {
    getStoreRequests: {
      method: "GET",
      permission: "private",
      path: "/api/v1/admin/store-requests",
    },
  },
} as const;
