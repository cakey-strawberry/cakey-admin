import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { STASTICS_TYPE } from "@common/constants/constants";

type StasticsCardProps = {
  type: STASTICS_TYPE;
  count: number;
};

export function StasticsCard({ type, count }: StasticsCardProps) {
  const getName = (type: STASTICS_TYPE) => {
    switch (type) {
      case STASTICS_TYPE.STORE:
        return "등록된 스토어";
      case STASTICS_TYPE.STORE_REQUEST:
        return "등록된 스토어 요청";
      case STASTICS_TYPE.USER:
        return "등록된 유저";
      default:
        return;
    }
  };

  const getIcon = (type: STASTICS_TYPE) => {
    switch (type) {
      case STASTICS_TYPE.STORE:
        return <StoreIcon />;
      case STASTICS_TYPE.STORE_REQUEST:
        return <InventoryIcon />;
      case STASTICS_TYPE.USER:
        return <GroupIcon />;
      default:
        return <StoreIcon />;
    }
  };

  return (
    <Wrapper variant="outlined">
      <CardContentWrapper>
        <DescriptionWrapper>
          <Typography variant="subtitle1" color="text.secondary">
            {getName(type)}
          </Typography>
          {getIcon(type)}
        </DescriptionWrapper>
        <Typography variant="h5" component="div" sx={{ alignSelf: "flex-end" }}>
          {count}
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
