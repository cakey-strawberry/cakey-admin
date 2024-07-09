import { styled } from "@mui/material/styles";

import { StasticsCard } from "../StasticsCard/StasticsCard";

export function StasticsSection() {
  return (
    <Wrapper>
      <StasticsCard />
      <StasticsCard />
      <StasticsCard />
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  borderRadius: "8px",
  marginBottom: "16px",
});
