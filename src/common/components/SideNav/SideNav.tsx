import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import RateReviewIcon from "@mui/icons-material/RateReview";
import StoreIcon from "@mui/icons-material/Store";
import { Divider, Link, LinkTypeMap, ListSubheader } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import { useSetAtom } from "jotai";
import { Link as RouterLink, useLocation } from "react-router-dom";

import logo from "@assets/logo.svg";
import { ADMIN_TOKEN, DEV_ADMIN_TOKEN } from "@common/constants/constants";
import {
  dashboardPath,
  reviewsPath,
  storesPath,
  usersPath,
} from "@common/router/paths/paths";
import { authAtom } from "@common/store/atoms/authAtom";

export function SideNav() {
  const location = useLocation();

  const tokenKey =
    process.env.NODE_ENV === "development" ? DEV_ADMIN_TOKEN : ADMIN_TOKEN;

  const setAuthState = useSetAtom(authAtom);

  const handleLogOut = () => {
    localStorage.removeItem(tokenKey);
    setAuthState(false);
  };

  return (
    <Wrapper>
      <Logo src={logo} />
      <Spacer />
      <NavWrapper>
        <div>
          <List
            component={"nav"}
            aria-labelledby="dashboard"
            subheader={
              <ListSubheader component="div" id="subheader">
                대시보드 홈
              </ListSubheader>
            }
          >
            <StyledLink
              component={RouterLink}
              to={dashboardPath}
              underline={"none"}
              isActive={location.pathname === dashboardPath}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <StyledListItemIcon
                    isActive={location.pathname === dashboardPath}
                  >
                    <DashboardIcon />
                  </StyledListItemIcon>
                  <StyledListItemText
                    isActive={location.pathname === dashboardPath}
                    primary="Dashboard"
                    primaryTypographyProps={{ fontSize: "14px" }}
                  />
                </ListItemButton>
              </ListItem>
            </StyledLink>
          </List>

          <SectionDivder variant="middle" />

          <List
            component={"nav"}
            aria-labelledby="store user review management"
            subheader={
              <ListSubheader component="div" id="subheader">
                상점 / 유저 / 리뷰 관리
              </ListSubheader>
            }
          >
            <StyledLink
              component={RouterLink}
              to={storesPath}
              underline={"none"}
              isActive={location.pathname === storesPath}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <StyledListItemIcon
                    isActive={location.pathname === storesPath}
                  >
                    <StoreIcon />
                  </StyledListItemIcon>
                  <StyledListItemText
                    isActive={location.pathname === storesPath}
                    primary="Stores"
                    primaryTypographyProps={{ fontSize: "14px" }}
                  />
                </ListItemButton>
              </ListItem>
            </StyledLink>

            <StyledLink
              component={RouterLink}
              to={usersPath}
              underline={"none"}
              isActive={location.pathname === usersPath}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <StyledListItemIcon
                    isActive={location.pathname === usersPath}
                  >
                    <GroupIcon />
                  </StyledListItemIcon>
                  <ListItemText
                    primary="Users"
                    primaryTypographyProps={{ fontSize: "14px" }}
                  />
                </ListItemButton>
              </ListItem>
            </StyledLink>

            <StyledLink
              component={RouterLink}
              to={reviewsPath}
              underline={"none"}
              isActive={location.pathname === reviewsPath}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <StyledListItemIcon
                    isActive={location.pathname === reviewsPath}
                  >
                    <RateReviewIcon />
                  </StyledListItemIcon>
                  <ListItemText
                    primary="Reviews"
                    primaryTypographyProps={{ fontSize: "14px" }}
                  />
                </ListItemButton>
              </ListItem>
            </StyledLink>
          </List>

          <SectionDivder variant="middle" />
        </div>

        <List component={"nav"} aria-labelledby="logout section">
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{ fontSize: "14px" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "32px",
  paddingBottom: "16px",
});

const Logo = styled("img")({
  paddingLeft: "16px",
  width: "128px",
});

const NavWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "space-between",
});

const Spacer = styled("div")({
  height: "32px",
});

const SectionDivder = styled(Divider)({
  marginTop: "8px",
  marginBottom: "8px",
});

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{
  isActive: boolean;
}>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : "inherit",
  "&:hover": {
    color: theme.palette.primary.main,
  },
})) as OverridableComponent<LinkTypeMap<{ isActive: boolean }>>;

const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{
  isActive: boolean;
}>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : "black",
}));

const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{
  isActive: boolean;
}>(({ theme, isActive }) => ({
  "& .MuiTypography-root": {
    fontSize: "14px",
    color: isActive ? theme.palette.primary.main : "black",
  },
}));
