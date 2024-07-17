import { useInfiniteQuery } from "@tanstack/react-query";

import { storeRequestKeys } from "@common/queries/keys";
import { AdminRepository } from "@common/repositories/admin/admin";

export function useStoreRequests() {
  return useInfiniteQuery({
    queryKey: storeRequestKeys.storeRequests(),
    queryFn: ({ pageParam = null }) => {
      return AdminRepository.getStoreRequests({
        cursorId: pageParam,
        limit: 3,
      });
    },
    getNextPageParam: (lastPage) => {
      if (
        lastPage.data.pagination.hasNext &&
        lastPage.data.pagination.nextCursor
      ) {
        return lastPage.data.pagination.nextCursor;
      }

      return null;
    },
    initialPageParam: "",
  });
}
