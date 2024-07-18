import { useQuery } from "@tanstack/react-query";

import { storeRequestKeys } from "@common/queries/keys";
import { AdminRepository } from "@common/repositories/admin/admin";

type UseStoreRequestParam = {
  storeRequestId: string;
};

export function useStoreRequest({ storeRequestId }: UseStoreRequestParam) {
  return useQuery({
    queryKey: storeRequestKeys.storeRequestById(storeRequestId),
    queryFn: () => {
      return AdminRepository.getStoreRequestById({
        storeRequestId,
      });
    },
  });
}
