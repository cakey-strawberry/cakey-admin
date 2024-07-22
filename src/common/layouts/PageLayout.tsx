import { styled } from "@mui/material/styles";
import { ReactElement, ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  pageHeader: ReactElement;
};

export function PageLayout({ children, pageHeader }: PageLayoutProps) {
  return (
    <Wrapper>
      <PageHeaderWrapper>{pageHeader}</PageHeaderWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  padding: "24px",
  backgroundColor: "#f9f9f9",
});

const PageHeaderWrapper = styled("div")({
  width: "100%",
  height: "64px",
});

const ChildrenWrapper = styled("div")({
  flex: 1,
  width: "100%",
  minHeight: "100vh",
});
