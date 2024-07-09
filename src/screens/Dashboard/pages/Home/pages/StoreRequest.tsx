import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  styled,
  Box,
  Chip,
  ListItemIcon,
  Link,
  Button,
  Paper,
} from "@mui/material";
import { useHistory, Link as RouterLink } from "react-router-dom";

import { PageHeader } from "@common/components/PageHeader/PageHeader";
import { PageLayout } from "@common/layouts/PageLayout";

const storeRequest = {
  name: "버터버터 베이커리",
  address: "123 Main St, Anytown, USA",
  tags: ["Tag1", "Tag2", "Tag3"],
  thumbnail: "https://via.placeholder.com/150",
  reviews: [
    { comment: "Great place!", rating: 5 },
    { comment: "Not bad.", rating: 3 },
  ],
  loc: { coordinates: [-123.123, 49.123] },
  operatingHours: [
    { day: "Monday", open: "09:00", close: "17:00", closed: false },
    { day: "Tuesday", open: "09:00", close: "17:00", closed: false },
  ],
  createdBy: { name: "John Doe" },
  socialLinks: ["http://example.com", "http://example.org"],
};

export function StoreRequest() {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <PageLayout pageHeader={<PageHeader headerTitle="Store Request" />}>
      <Button
        sx={{
          marginBottom: "16px",
          color: "text.secondary",
        }}
        startIcon={
          <ArrowBackIcon
            sx={{
              color: "text.secondary",
            }}
          />
        }
        variant="text"
        color="inherit"
        onClick={handleBackClick}
      >
        뒤로 가기
      </Button>
      <GridContainer>
        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            이름
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="h5" gutterBottom>
                    {storeRequest.name}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            스토어 요청 타입
          </Typography>
          <List>
            <ListItem>
              <Chip color="primary" label={"CREATE"} />
            </ListItem>
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            주소
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary={storeRequest.address} />
            </ListItem>
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            썸네일
          </Typography>
          <List>
            <ListItem>
              <StoreImage
                src={storeRequest.thumbnail}
                alt={storeRequest.name}
              />
            </ListItem>
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            좌표
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                primary={`Lat: ${storeRequest.loc.coordinates[1]}, Lng: ${storeRequest.loc.coordinates[0]}`}
              />
            </ListItem>
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            운영 시간
          </Typography>
          <List>
            {storeRequest.operatingHours.map((hour, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${hour.day}: ${hour.closed ? "Closed" : `${hour.open} - ${hour.close}`}`}
                />
              </ListItem>
            ))}
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            요청한 사람
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar />
              </ListItemIcon>
              <ListItemText primary={storeRequest.createdBy.name} />
            </ListItem>
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            외부 링크
          </Typography>
          <List>
            {storeRequest.socialLinks.map((link, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <Link
                  component={RouterLink}
                  rel="noopener noreferrer"
                  to={{ pathname: link }}
                  underline="none"
                  target="_blank"
                >
                  <ListItemText primary={link} />
                </Link>
              </ListItem>
            ))}
          </List>
        </PaperBox>

        <PaperBox variant="outlined">
          <Typography variant="h6" gutterBottom>
            태그
          </Typography>
          <List>
            {storeRequest.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  marginRight: "8px",
                }}
              />
            ))}
          </List>
        </PaperBox>
      </GridContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "16px",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleBackClick}
          sx={{
            marginRight: "16px",
          }}
        >
          스토어 요청 삭제하기
        </Button>
        <Button variant="contained" color="primary" onClick={handleBackClick}>
          스토어 생성하기
        </Button>
      </Box>
    </PageLayout>
  );
}

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: "16px",
});

const PaperBox = styled(Paper)({
  padding: "16px",
});

const StoreImage = styled("img")({
  width: "100%",
  height: "150px",
  objectFit: "contain",
  objectPosition: "left",
});
