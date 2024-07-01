import { useAtomValue } from "jotai";
import { Route, Redirect } from "react-router-dom";
import type { RouteProps } from "react-router-dom";

import { authAtom } from "@common/store/atoms/authAtom";

import { landingPath } from "../paths/paths";

export function PrivateRoute({ ...rest }: RouteProps) {
  const isAuthenticated = useAtomValue(authAtom);

  console.log(isAuthenticated);

  return isAuthenticated ? <Route {...rest} /> : <Redirect to={landingPath} />;
}
