import { CursorPagination } from "@common/types/pagination";

export enum StoreRequestTypes {
  CREATE = "create",
  UPDATE = "update",
}

type Location = {
  type: "Point";
  coordinates: [number, number];
};

type OperatingHour = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

type CreatedBy = {
  _id: string;
  oauthId: string;
  name: string;
  avatar: string;
};

type Review = {
  _id: string;
  reviewer: string;
  comment: string;
  images: string[];
  rating: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};

type Store = {
  _id: string;
  name: string;
  address: string;
  tags?: string[];
  thumbnail: string;
  reviews: Review[];
  loc: Location;
  operatingHours: OperatingHour[];
  addedBy: string;
  updatedBy?: string;
  socialLinks?: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type StoreRequest = {
  _id: string;
  storeId?: string;
  type: StoreRequestTypes;
  name: string;
  address: string;
  tags?: string[];
  thumbnail: string;
  reviews: Review[];
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

type CreateStoreData = Omit<
  Store,
  "_id" | "updatedBy" | "createdAt" | "updatedAt"
>;

export type CreateStoreRequestPayload = {
  storeRequestId: string;
  storeData: CreateStoreData;
};

export type CreateStoreResponse = {
  data: CreateStoreData;
};

type UpdateStoreData = Partial<Store>;

export type UpdateStoreRequestPayload = {
  storeId: string;
  storeRequestId: string;
  storeData: UpdateStoreData;
};

export type UpdateStoreResponse = {
  data: UpdateStoreData;
};
