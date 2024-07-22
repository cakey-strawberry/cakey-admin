import { useAtomValue } from "jotai";
import { Route, Redirect } from "react-router-dom";
import type { RouteProps } from "react-router-dom";

import { authAtom } from "@common/store/atoms/authAtom";

import { homePath } from "../paths/paths";

export function PublicRoute({ ...rest }: RouteProps) {
  const isAuthenticated = useAtomValue(authAtom);

  return isAuthenticated ? <Redirect to={homePath} /> : <Route {...rest} />;
}
