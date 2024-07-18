export type SignInPayload = {
  params: {
    id: string;
    code: string;
  };
};

export type SignInResponse = {
  data: {
    adminToken: string;
  };
};
