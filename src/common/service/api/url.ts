interface BuildUrlOptions {
  path: string;
  pathVariables?: Record<string, string | number> | null;
  queryParams?: Record<string, string | number> | null;
}

export class Uri {
  private static interpolatePath(
    path: string,
    pathVariables: Record<string, string | number> | null,
  ): string {
    if (!pathVariables) {
      return path;
    }

    // eslint-disable-next-line no-useless-escape
    return path.replace(/:([^\/]+)/g, (_, key: string) => {
      if (Object.prototype.hasOwnProperty.call(pathVariables, key)) {
        return encodeURIComponent(String(pathVariables[key]));
      }

      throw new Error(`Path variable ${key} is not provided`);
    });
  }

  private static buildQueryParams(
    queryParams: Record<string, string | number> | null,
  ): string {
    if (!queryParams) {
      return "";
    }
    const params = new URLSearchParams(queryParams as Record<string, string>);

    return params.toString();
  }

  public static buildUrl({
    path,
    pathVariables = null,
    queryParams = null,
  }: BuildUrlOptions): string {
    const host = import.meta.env.VITE_API_URL;
    const interpolatedPath = this.interpolatePath(path, pathVariables);
    const queryString = this.buildQueryParams(queryParams);

    let url = `${host}${interpolatedPath}`;

    if (queryString) {
      url += `?${queryString}`;
    }

    return url;
  }
}
