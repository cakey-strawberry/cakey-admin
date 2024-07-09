import { Switch, Route } from "react-router-dom";

import { SideNav } from "@common/components/SideNav/SideNav";
import { SidebarLayout } from "@common/layouts/SideNavLayout";
import {
  dashboardPath,
  homePath,
  reviewsPath,
  storesPath,
  usersPath,
} from "@common/router/paths/paths";

import { HomeRoutes } from "./pages/Home/Routes";
import { Review } from "./pages/Review/Review";
import { Store } from "./pages/Store/Store";
import { User } from "./pages/User/User";

export function DashboardRoutes() {
  return (
    <Switch>
      <Route path={[dashboardPath, storesPath, usersPath, reviewsPath]}>
        <SidebarLayout sidebar={<SideNav />}>
          <Switch>
            <Route path={storesPath} component={() => <Store />} />
            <Route path={usersPath} component={() => <User />} />
            <Route path={reviewsPath} component={() => <Review />} />
            <Route path={homePath} component={() => <HomeRoutes />} />
            <Route component={() => <>404</>} />
          </Switch>
        </SidebarLayout>
      </Route>
    </Switch>
  );
}
