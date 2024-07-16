import { Uri } from "./url";

type RequestProps = {
  endpointSet: {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    permission: "private" | "public";
    path: string;
  };
  pathVariables?: Record<string, string | number> | null;
  body?: Record<string, unknown> | FormData;
  queryParams?: Record<string, string | number> | null;
  init?: RequestInit;
};

type GetProps = Omit<RequestProps, "body">;

type PostProps = RequestProps;

type PutProps = RequestProps;

type PatchProps = RequestProps;

type DeleteProps = Omit<RequestProps, "body">;

class HTTPError extends Error {
  readonly response: unknown;
  readonly status: number;
  readonly statusText: string;

  constructor(status: number, statusText: string, response: unknown) {
    super(statusText);
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

class APIClient {
  private adminToken?: string | null;

  constructor() {
    const storedToken = localStorage.getItem(import.meta.env.VITE_ADMIN_TOKEN);
    if (storedToken) {
      this.adminToken = storedToken;
    } else {
      this.adminToken = null;
    }
  }

  public getAdminToken() {
    return this.adminToken;
  }

  public setAdminToken(token: string) {
    this.adminToken = token;
    localStorage.setItem(import.meta.env.VITE_ADMIN_TOKEN, token);
  }

  public unSetAdminToken() {
    this.adminToken = "";
    localStorage.removeItem(import.meta.env.VITE_ADMIN_TOKEN);
  }

  public purgeCredentials() {
    this.unSetAdminToken();
  }

  public get<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    init,
  }: GetProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: "GET",
      },
    });
  }

  public post<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    body,
    init,
  }: PostProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: "POST",
      },
      body,
    });
  }

  public delete<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    init,
  }: DeleteProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: "DELETE",
      },
    });
  }

  public put<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    body,
    init,
  }: PutProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: "PUT",
      },
      body,
    });
  }

  public patch<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    body,
    init,
  }: PatchProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: "PATCH",
      },
      body,
    });
  }

  private async request<TResponse>({
    endpointSet,
    body,
    queryParams,
    pathVariables,
    init,
  }: RequestProps) {
    const headers = this.createHeaders(body, endpointSet.permission);

    const requestUrl = Uri.buildUrl({
      path: endpointSet.path,
      pathVariables,
      queryParams,
    });

    const response = await fetch(requestUrl, {
      ...init,
      method: endpointSet.method,
      headers,
      body: this.prepareBody(body),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new HTTPError(response.status, response.statusText, responseData);
    }

    return responseData as TResponse;
  }

  private createHeaders(
    body?: Record<string, unknown> | FormData,
    permission?: "private" | "public",
  ) {
    const headers: Record<string, string> = {
      ...this.addContentTypeHeader(body),
      ...this.addAuthorizationHeader(permission),
    };
    return headers;
  }

  private addContentTypeHeader(
    body?: Record<string, unknown> | FormData,
  ): Record<string, string> {
    if (body instanceof FormData) {
      return {};
    }
    return { "Content-Type": "application/json" };
  }

  private addAuthorizationHeader(
    permission?: "private" | "public",
  ): Record<string, string> {
    if (permission === "private" && this.adminToken) {
      return { Authorization: `Bearer ${this.adminToken}` };
    }
    return {};
  }

  private prepareBody(
    body?: Record<string, unknown> | FormData,
  ): BodyInit | null {
    if (!body) {
      return null;
    }
    if (body instanceof FormData) {
      return body;
    }
    return JSON.stringify(body);
  }
}

export const api = new APIClient();
