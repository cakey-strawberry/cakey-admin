import { CursorPagination } from "@common/types/pagination";

export enum StoreRequestTypes {
  CREATE = "create",
  UPDATE = "update",
}

export type Location = {
  type: "Point";
  coordinates: [number, number];
};

export type OperatingHour = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

export type CreatedBy = {
  _id: string;
  oauthId: string;
  name: string;
  avatar: string;
};

export type StoreRequest = {
  _id: string;
  type: StoreRequestTypes;
  name: string;
  address: string;
  tags?: string[];
  thumbnail: string;
  reviews: unknown[];
  loc: Location;
  operatingHours: OperatingHour[];
  createdBy: CreatedBy;
  socialLinks?: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type GetStoreRequestById = {
  storeRequestId: string;
};

export type GetStoreRequestsPayload = {
  cursorId: string | null;
  limit: number;
};

export type StoreRequestsResponse = {
  data: {
    data: StoreRequest[];
    pagination: CursorPagination;
  };
};

export type GetStoreRequestByIdResponse = {
  data: StoreRequest;
};

export type DeleteStoreRequestPayload = {
  storeRequestId: string;
};

export type DeleteStoreResponse = Record<string, never>;

export type CreateStoresRequestPayload = {
  storeRequestId: string;
  storeData: CreateStoreData;
};

type CreateStoreData = {
  name: string;
  address: string;
  tags?: string[];
  thumbnail: string;
  reviews?: string[];
  loc: Location;
  operatingHours: OperatingHour[];
  addedBy: string;
  socialLinks?: string[];
};
