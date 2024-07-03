import { Switch, Route } from "react-router-dom";

import { SideNav } from "@common/components/SideNav/SideNav";
import { SidebarLayout } from "@common/layouts/SideNavLayout";
import {
  dashboardPath,
  reviewsPath,
  storesPath,
  usersPath,
} from "@common/router/paths/paths";

export function DashboardRoutes() {
  return (
    <Switch>
      <Route path={[dashboardPath, storesPath, usersPath, reviewsPath]}>
        <SidebarLayout sidebar={<SideNav />}>
          <Switch>
            <Route
              exact
              path={dashboardPath}
              component={() => <>dashboard</>}
            />
            <Route path={storesPath} component={() => <>store</>} />
            <Route path={usersPath} component={() => <>user</>} />
            <Route path={reviewsPath} component={() => <>review</>} />
            <Route component={() => <>404</>} />
          </Switch>
        </SidebarLayout>
      </Route>
    </Switch>
  );
}
