import { api } from "@common/service/api/api";
import { AdminEndpointSet } from "@common/service/api/endpoints";

import { StoreRequestsResponse } from "./types";

export type GetStoreRequestsPayload = {
  cursorId: string | null;
  limit: number;
};

export class AdminRepository {
  static async getStoreRequests({ cursorId, limit }: GetStoreRequestsPayload) {
    return api.get<StoreRequestsResponse>({
      endpointSet: AdminEndpointSet.storeRequest.getStoreRequests,
      queryParams: cursorId ? { cursorId, limit } : { limit },
    });
  }
}
