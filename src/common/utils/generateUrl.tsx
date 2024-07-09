import { ExtractRouteParams, generatePath } from "react-router";

function filterNonStringAndNumberAndBoolean<T extends Record<string, unknown>>(
  object: T,
) {
  return Object.fromEntries(
    Object.entries(object)
      .filter(
        ([, value]) =>
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean",
      )
      .map((entry) => [entry[0], String(entry[1])]),
  );
}

function checkEmptyObject(
  object: ReturnType<typeof filterNonStringAndNumberAndBoolean>,
) {
  return Object.values(object).length === 0 && object.constructor === Object;
}

/**
 * path, pathVariables, queryParams를 URL로 만들어주는 함수입니다.
 * @param path '/channels/:channelCode'
 * @param pathVariables { channelCode: 'IGIEWEKF141FWAF1F' }
 * @param queryParams { from: 'conversionLink', limit: '1' } / { from: undefined }
 * @returns '/channels/IGIEWEKF141FWAF1F?from=conversionLink&limit=1'
 * @example
 *
 * const path = '/channels/:channelCode';
 * const pathVariables = { channelCode: 'IGIEWEKF141FWAF1F' };
 * const queryParams = { from: 'conversionLink', limit: '1' };
 *
 * generateUrl(path, pathVariables, queryParams);
 */
export const generateUrl = <T extends string>(
  path: T,
  pathVariables: ExtractRouteParams<T>,
  queryParams?: { [key: string]: unknown },
) => {
  const filteredQueryParams =
    queryParams && filterNonStringAndNumberAndBoolean(queryParams);

  if (!filteredQueryParams || checkEmptyObject(filteredQueryParams)) {
    return generatePath(path, pathVariables);
  }

  const generatedQueryParams = new URLSearchParams(
    filteredQueryParams,
  ).toString();

  return `${generatePath(path, pathVariables)}?${generatedQueryParams}`;
};
