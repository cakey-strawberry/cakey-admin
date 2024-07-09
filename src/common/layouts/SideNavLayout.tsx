import { styled } from "@mui/material/styles";
import { ReactElement, ReactNode } from "react";

type SidebarLayoutProps = {
  children: ReactNode;
  sidebar: ReactElement;
};

export function SidebarLayout({ children, sidebar }: SidebarLayoutProps) {
  return (
    <Wrapper>
      <SideNavWrapper>{sidebar}</SideNavWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const SideNavWrapper = styled("div")({
  position: "fixed",
  width: "16rem",
  height: "100vh",
  borderRight: "1px solid lightgray",
});

const ChildrenWrapper = styled("div")({
  display: "flex",
  flex: 1,
  paddingLeft: "16rem",
});
