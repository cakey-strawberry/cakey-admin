import { useQuery } from "@tanstack/react-query";

import { stasticsKeys } from "@common/queries/keys";
import { AdminRepository } from "@common/repositories/admin/admin";

export function useStastics() {
  return useQuery({
    queryKey: stasticsKeys.all,
    queryFn: () => {
      return AdminRepository.getStastics();
    },
  });
}
