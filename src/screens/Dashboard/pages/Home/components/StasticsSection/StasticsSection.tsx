import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

import { STASTICS_TYPE } from "@common/constants/constants";

import { useStastics } from "../../queries/useStastics";
import { StasticsCard } from "../StasticsCard/StasticsCard";

export function StasticsSection() {
  const { data, isLoading, isError } = useStastics();

  if (isError) {
    return (
      <Wrapper>
        <div>통계를 불러올 수 없습니다</div>
      </Wrapper>
    );
  }

  if (isLoading || !data) {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    );
  }

  const stastics = data.data;

  return (
    <Wrapper>
      <StasticsCard type={STASTICS_TYPE.USER} count={stastics.userCount} />
      <StasticsCard
        type={STASTICS_TYPE.STORE_REQUEST}
        count={stastics.storeRequestCount}
      />
      <StasticsCard type={STASTICS_TYPE.STORE} count={stastics.storeCount} />
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
