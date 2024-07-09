import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  styled,
} from "@mui/material";

export function StoreRequestCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Chip label="Create" size="small" sx={{ marginBottom: "8px" }} />
        <Typography variant="h5" component="div" sx={{ marginBottom: "8px" }}>
          버터버터 베이커리
        </Typography>

        <EllipsisTypography color="text.secondary">
          서울 특별시 뭐시기 저시기 서울 특별시 뭐시기 저시기서울 특별시 뭐시기
          저시기서울 특별시 뭐시기 저시기서울 특별시 뭐시기 저시기
        </EllipsisTypography>

        <CardMedia
          sx={{ height: 140, borderRadius: "8px", marginBottom: "8px" }}
          image="https://picsum.photos/400"
          title="green iguana"
        />
        <CardInfoWrapper>
          <DateInfoWrapper>
            <Typography variant="body2" color="text.secondary">
              2023 / 07 / 04
            </Typography>
          </DateInfoWrapper>
          <UserInfoWrapper>
            <Avatar
              alt="User Avatar"
              src="https://randomuser.me/api/portraits/men/41.jpg"
              sx={{ width: 24, height: 24, marginRight: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              사용자 이름
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

const DateInfoWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
});

const CardInfoWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "16px",
});
