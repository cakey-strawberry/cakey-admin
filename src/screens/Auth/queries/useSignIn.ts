import { useMutation } from "@tanstack/react-query";

import { AuthRepository } from "@common/repositories/auth/auth";
import { SignInPayload, SignInResponse } from "@common/repositories/auth/types";
import { ErrorResponse } from "@common/service/api/api";

export function useSignIn() {
  return useMutation<SignInResponse, ErrorResponse, SignInPayload>({
    mutationFn: ({ params }) =>
      AuthRepository.signIn({
        params,
      }),
  });
}
