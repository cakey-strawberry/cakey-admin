export const AuthEndpointSet = {
  Admin: {
    signIn: {
      method: "POST",
      permission: "private",
      path: "/api/v1/admin",
    },
  },
} as const;
