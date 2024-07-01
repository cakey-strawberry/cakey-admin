import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import { useAutoSignIn } from "@common/hooks/useAutoSignIn";
import { dashboardPath, landingPath } from "@common/router/paths/paths";
import { PrivateRoute } from "@common/router/routers/PrivateRoute";
import { PublicRoute } from "@common/router/routers/PublicRoute";
import { theme } from "@common/theme/theme";
import { Auth } from "@screens/Auth/Auth";
import { Dashboard } from "@screens/Dashboard/Dashboard";

function App() {
  const [loading] = useAutoSignIn();

  if (loading) {
    return <></>;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PrivateRoute path={dashboardPath} render={() => <Dashboard />} />
        <PublicRoute path={landingPath} render={() => <Auth />} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
