import { api } from "@common/service/api/api";
import { AdminEndpointSet } from "@common/service/api/endpoints";

import {
  CreateStoreRequestPayload,
  CreateStoreResponse,
  DeleteStoreRequestPayload,
  DeleteStoreResponse,
  GetStasticsResponse,
  GetStoreRequestById,
  GetStoreRequestByIdResponse,
  GetStoreRequestsPayload,
  StoreRequestsResponse,
  UpdateStoreRequestPayload,
  UpdateStoreResponse,
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

  static async createStore({
    storeRequestId,
    storeData,
  }: CreateStoreRequestPayload) {
    return api.post<CreateStoreResponse>({
      endpointSet: AdminEndpointSet.storeRequest.createStores,
      body: {
        storeRequestId,
        storeData,
      },
    });
  }

  static async updateStore({
    storeId,
    storeRequestId,
    storeData,
  }: UpdateStoreRequestPayload) {
    return api.put<UpdateStoreResponse>({
      endpointSet: AdminEndpointSet.storeRequest.updateStore,
      pathVariables: { storeId },
      body: {
        storeRequestId,
        storeData,
      },
    });
  }

  static async getStastics() {
    return api.get<GetStasticsResponse>({
      endpointSet: AdminEndpointSet.admin.getStastics,
    });
  }
}
