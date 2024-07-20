import { api } from "@common/service/api/api";
import { AdminEndpointSet } from "@common/service/api/endpoints";

import {
  CreateStoresRequestPayload,
  DeleteStoreRequestPayload,
  DeleteStoreResponse,
  GetStoreRequestById,
  GetStoreRequestByIdResponse,
  GetStoreRequestsPayload,
  StoreRequestsResponse,
} from "./types";

export class AdminRepository {
  static async getStoreRequestById({ storeRequestId }: GetStoreRequestById) {
    return api.get<GetStoreRequestByIdResponse>({
      endpointSet: AdminEndpointSet.storeRequest.getStoreRequestById,
      pathVariables: { storeRequestId },
    });
  }

  static async getStoreRequests({ cursorId, limit }: GetStoreRequestsPayload) {
    return api.get<StoreRequestsResponse>({
      endpointSet: AdminEndpointSet.storeRequest.getStoreRequests,
      queryParams: cursorId ? { cursorId, limit } : { limit },
    });
  }

  static async deleteStoreRequest({
    storeRequestId,
  }: DeleteStoreRequestPayload) {
    return api.delete<DeleteStoreResponse>({
      endpointSet: AdminEndpointSet.storeRequest.deleteStoreRequest,
      pathVariables: { storeRequestId },
    });
  }

  static async createStores({
    storeRequestId,
    storeData,
  }: CreateStoresRequestPayload) {
    return api.post({
      endpointSet: AdminEndpointSet.storeRequest.createStores,
      body: {
        storeRequestId,
        storeData,
      },
    });
  }
}
