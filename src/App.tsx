import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavermapsProvider } from "react-naver-maps";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useAutoSignIn } from "@common/hooks/useAutoSignIn";
import { dashboardPath, landingPath } from "@common/router/paths/paths";
import { PrivateRoute } from "@common/router/routers/PrivateRoute";
import { PublicRoute } from "@common/router/routers/PublicRoute";
import { theme } from "@common/theme/theme";
import { Auth } from "@screens/Auth/Auth";
import { DashboardRoutes } from "@screens/Dashboard/Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [loading] = useAutoSignIn();

  if (loading) {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavermapsProvider
        ncpClientId={import.meta.env.VITE_NAVER_CLOUD_PLATFORM_CLIENT_ID}
      >
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Switch>
              <PublicRoute exact path={landingPath} render={() => <Auth />} />
              <PrivateRoute
                path={dashboardPath}
                render={() => <DashboardRoutes />}
              />
              <Route component={() => <>404</>} />
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </NavermapsProvider>
    </QueryClientProvider>
  );
}

export default App;
