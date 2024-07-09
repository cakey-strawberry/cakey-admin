import { Route, Switch } from "react-router-dom";

import { homePath, storeRequestPath } from "@common/router/paths/paths";

import { Home } from "./pages/Home";
import { StoreRequest } from "./pages/StoreRequest";

export function HomeRoutes() {
  return (
    <Switch>
      <Route path={storeRequestPath} render={() => <StoreRequest />} />
      <Route exact path={homePath} render={() => <Home />} />
      <Route component={() => <>404</>} />
    </Switch>
  );
}
