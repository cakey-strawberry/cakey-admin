import { Alert, Snackbar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useAtom } from "jotai";

import { PageHeader } from "@common/components/PageHeader/PageHeader";
import { PageLayout } from "@common/layouts/PageLayout";
import { snackbarAtom } from "@common/store/atoms/snackbarAtom";

import { StasticsSection } from "../components/StasticsSection/StasticsSection";
import { StoreRequestSection } from "../components/StoreRequestSection/StoreRequestSection";

export function Home() {
  const [snackbarState, setSnackbar] = useAtom(snackbarAtom);

  return (
    <>
      <PageLayout pageHeader={<PageHeader headerTitle="Dashboard" />}>
        <StasticsSection />
        <Wrapper variant="outlined">
          <SectionWrapper>
            <Typography
              variant="subtitle1"
              component="p"
              color="text.secondary"
            >
              승인 대기중인 Store Requests
            </Typography>
            <StoreRequestSection />
          </SectionWrapper>
        </Wrapper>
      </PageLayout>
      <Snackbar
        ContentProps={{
          sx: {
            background: "red",
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarState.open}
        autoHideDuration={2000}
        onClose={() => {
          setSnackbar({ ...snackbarState, open: false });
        }}
      >
        <Alert
          severity={snackbarState.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </>
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
