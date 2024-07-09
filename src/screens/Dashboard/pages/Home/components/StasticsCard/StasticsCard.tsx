import StoreIcon from "@mui/icons-material/Store";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export function StasticsCard() {
  return (
    <Wrapper variant="outlined">
      <CardContentWrapper>
        <DescriptionWrapper>
          <Typography variant="subtitle1" color="text.secondary">
            등록된 스토어
          </Typography>
          <StoreIcon />
        </DescriptionWrapper>
        <Typography variant="h5" component="div" sx={{ alignSelf: "flex-end" }}>
          78
        </Typography>
      </CardContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Card)({
  flex: 1,
  backgroundColor: "white",
});

const CardContentWrapper = styled(CardContent)({
  display: "flex",
  flexDirection: "row",
  flex: 1,
});

const DescriptionWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});
