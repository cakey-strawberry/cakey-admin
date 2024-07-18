import { api } from "@common/service/api/api";
import { AuthEndpointSet } from "@common/service/api/endpoints";

import { SignInPayload, SignInResponse } from "./types";

export class AuthRepository {
  static async signIn({ params }: SignInPayload) {
    return api.post<SignInResponse>({
      endpointSet: AuthEndpointSet.admin.signIn,
      body: params,
    });
  }
}
