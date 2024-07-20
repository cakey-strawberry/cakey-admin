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
  admin: {
    getStastics: {
      method: "GET",
      permission: "private",
      path: "/api/v1/admin/stastics",
    },
  },
  storeRequest: {
    getStoreRequestById: {
      method: "GET",
      permission: "private",
      path: "/api/v1/admin/store-requests/:storeRequestId",
    },
    deleteStoreRequest: {
      method: "DELETE",
      permission: "private",
      path: "/api/v1/admin/store-requests/:storeRequestId",
    },
    getStoreRequests: {
      method: "GET",
      permission: "private",
      path: "/api/v1/admin/store-requests",
    },
    createStores: {
      method: "POST",
      permission: "private",
      path: "/api/v1/admin/stores",
    },
    updateStore: {
      method: "PATCH",
      permission: "private",
      path: "/api/v1/admin/stores/:storeId",
    },
  },
} as const;
