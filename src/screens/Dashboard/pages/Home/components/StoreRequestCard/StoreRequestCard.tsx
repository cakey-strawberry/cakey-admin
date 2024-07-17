import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  styled,
} from "@mui/material";

import type { StoreRequest } from "@common/repositories/admin/types";

type StoreRequestCardProps = {
  storeRequest: StoreRequest;
};

export function StoreRequestCard({ storeRequest }: StoreRequestCardProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Chip
          label={storeRequest.type}
          size="small"
          sx={{ marginBottom: "8px" }}
        />
        <Typography variant="h5" component="div" sx={{ marginBottom: "8px" }}>
          {storeRequest.name}
        </Typography>

        <EllipsisTypography color="text.secondary">
          {storeRequest.address}
        </EllipsisTypography>

        <CardMedia
          sx={{ height: 140, borderRadius: "8px", marginBottom: "8px" }}
          image={storeRequest.thumbnail}
          title={storeRequest.name}
        />
        <CardInfoWrapper>
          <UserInfoWrapper>
            <Avatar
              alt={storeRequest.createdBy.name}
              src={storeRequest.createdBy.avatar}
              sx={{ width: 24, height: 24, marginRight: 1 }}
            />
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
              variant="body2"
              color="text.secondary"
            >
              {storeRequest.createdBy.name}
            </Typography>
          </UserInfoWrapper>
        </CardInfoWrapper>
      </CardContent>
    </Card>
  );
}

const EllipsisTypography = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  lineClamp: 2,
  color: theme.palette.text.secondary,
  marginBottom: "8px",
}));

const UserInfoWrapper = styled("div")({
  display: "flex",
  height: "100%",
  alignItems: "center",
  flexDirection: "row",
});

const CardInfoWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "16px",
});
