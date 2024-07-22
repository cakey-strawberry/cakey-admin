import { useMutation } from "@tanstack/react-query";

import { AdminRepository } from "@common/repositories/admin/admin";
import { UpdateStoreRequestPayload } from "@common/repositories/admin/types";

export function useUpdateStore() {
  return useMutation({
    mutationFn: ({
      storeRequestId,
      storeId,
      storeData,
    }: UpdateStoreRequestPayload) => {
      return AdminRepository.updateStore({
        storeRequestId,
        storeId,
        storeData,
      });
    },
  });
}
