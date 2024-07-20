import { useMutation } from "@tanstack/react-query";

import { CreateStoresRequestPayload } from "@common/repositories/admin/types";
import { api } from "@common/service/api/api";
import { AdminEndpointSet } from "@common/service/api/endpoints";

export function useCreateStores() {
  return useMutation({
    mutationFn: ({ storeRequestId, storeData }: CreateStoresRequestPayload) => {
      return api.post({
        endpointSet: AdminEndpointSet.storeRequest.createStores,
        body: {
          storeRequestId,
          storeData,
        },
      });
    },
  });
}
