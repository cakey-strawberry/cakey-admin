type SignInPayload = {
  params: {
    adminId: string;
    password: string;
  };
};

import { api } from "@common/service/api/api";
import { AuthEndpointSet } from "@common/service/api/endpoints";

export class AuthRepository {
  static async signIn({ params }: SignInPayload) {
    return api.post({
      endpointSet: AuthEndpointSet.Admin.signIn,
      body: params,
    });
  }
}
