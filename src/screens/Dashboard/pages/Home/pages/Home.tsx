import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { PageHeader } from "@common/components/PageHeader/PageHeader";
import { PageLayout } from "@common/layouts/PageLayout";

import { StasticsSection } from "../components/StasticsSection/StasticsSection";
import { StoreRequestSection } from "../components/StoreRequestSection/StoreRequestSection";

export function Home() {
  return (
    <PageLayout pageHeader={<PageHeader headerTitle="Dashboard" />}>
      <StasticsSection />
      <Wrapper variant="outlined">
        <SectionWrapper>
          <Typography variant="subtitle1" component="p" color="text.secondary">
            승인 대기중인 Store Requests
          </Typography>
          <StoreRequestSection />
        </SectionWrapper>
      </Wrapper>
    </PageLayout>
  );
}

const Wrapper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "white",
});

const SectionWrapper = styled("div")({
  flexDirection: "column",
  width: "100%",
});
