import { useMutation } from "@tanstack/react-query";

import { AdminRepository } from "@common/repositories/admin/admin";

export function useDeleteStoreRequest() {
  return useMutation({
    mutationFn: ({ storeRequestId }: { storeRequestId: string }) => {
      return AdminRepository.deleteStoreRequest({
        storeRequestId,
      });
    },
  });
}
