import { useMutation } from "@tanstack/react-query";

import {
  AuthRepository,
  SignInPayload,
  SignInResponse,
} from "@common/repositories/auth/auth";
import { ErrorResponse } from "@common/service/api/api";

export function useSignIn() {
  return useMutation<SignInResponse, ErrorResponse, SignInPayload>({
    mutationFn: ({ params }) =>
      AuthRepository.signIn({
        params,
      }),
  });
}
