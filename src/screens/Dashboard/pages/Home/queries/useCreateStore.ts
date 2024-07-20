import { useMutation } from "@tanstack/react-query";

import { AdminRepository } from "@common/repositories/admin/admin";
import { CreateStoreRequestPayload } from "@common/repositories/admin/types";

export function useCreateStore() {
  return useMutation({
    mutationFn: ({ storeData, storeRequestId }: CreateStoreRequestPayload) => {
      return AdminRepository.createStore({
        storeData,
        storeRequestId,
      });
    },
  });
}
