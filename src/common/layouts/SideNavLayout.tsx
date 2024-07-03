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
  height: "100vh",
  overflow: "hidden",
});

const SideNavWrapper = styled("div")({
  flex: "none",
  width: "16rem",
});

const ChildrenWrapper = styled("div")({
  flexGrow: 1,
  overflowY: "auto",
  backgroundColor: "orange",
  padding: "12px",
});
