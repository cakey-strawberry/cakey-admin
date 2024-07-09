import { Typography, styled } from "@mui/material";

type PageHeaderProps = {
  headerTitle: string;
};

export function PageHeader({ headerTitle }: PageHeaderProps) {
  return <Wrapper variant="h5">{headerTitle}</Wrapper>;
}

const Wrapper = styled(Typography)({
  fontWeight: 700,
});
