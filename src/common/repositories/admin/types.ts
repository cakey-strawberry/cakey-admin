import { CursorPagination } from "@common/types/pagination";

export enum StoreRequestTypes {
  CREATE = "create",
  UPDATE = "update",
}

export interface Location {
  type: "Point";
  coordinates: number[];
}

export interface OperatingHour {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
}

export interface CreatedBy {
  _id: string;
  oauthId: string;
  name: string;
  avatar: string;
}

export interface StoreRequest {
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
}

export type StoreRequestsResponse = {
  data: {
    data: StoreRequest[];
    pagination: CursorPagination;
  };
};
