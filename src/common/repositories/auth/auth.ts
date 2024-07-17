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

import { api } from "@common/service/api/api";
import { AuthEndpointSet } from "@common/service/api/endpoints";

export class AuthRepository {
  static async signIn({ params }: SignInPayload) {
    return api.post<SignInResponse>({
      endpointSet: AuthEndpointSet.admin.signIn,
      body: params,
    });
  }
}
