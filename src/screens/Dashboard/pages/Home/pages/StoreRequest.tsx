import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreIcon from "@mui/icons-material/Store";
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
  CircularProgress,
} from "@mui/material";
import { useSetAtom } from "jotai";
import { Container as MapDiv } from "react-naver-maps";
import { useHistory, useParams } from "react-router-dom";

import { Map } from "@common/components/Map/Map";
import { PageHeader } from "@common/components/PageHeader/PageHeader";
import { useScrollToTopOnMount } from "@common/hooks/useScrollToTopOnMount";
import { PageLayout } from "@common/layouts/PageLayout";
import { StoreRequestTypes } from "@common/repositories/admin/types";
import { snackbarAtom } from "@common/store/atoms/snackbarAtom";

import { useCreateStores } from "../queries/useCreateStores";
import { useDeleteStoreRequest } from "../queries/useDeleteStoreRequest";
import { useStoreRequest } from "../queries/useStoreRequest";

export function StoreRequest() {
  useScrollToTopOnMount();
  const { storeRequestId } = useParams<{ storeRequestId: string }>();

  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const setSnackbar = useSetAtom(snackbarAtom);

  const { data, isLoading, isError } = useStoreRequest({ storeRequestId });

  const storeRequest = data?.data;

  const deleteQuery = useDeleteStoreRequest();
  const createQuery = useCreateStores();

  const handleCreateStore = () => {
    if (!storeRequest) {
      return;
    }

    createQuery.mutate(
      {
        storeRequestId,
        storeData: {
          name: storeRequest.name,
          address: storeRequest.address,
          loc: storeRequest.loc,
          thumbnail: storeRequest.thumbnail,
          operatingHours: storeRequest.operatingHours,
          socialLinks: storeRequest.socialLinks,
          addedBy: storeRequest.createdBy._id,
          tags: storeRequest.tags,
        },
      },
      {
        onSuccess: () => {
          setSnackbar({
            message: "스토어가 생성되었습니다.",
            open: true,
            severity: "success",
          });

          history.goBack();
        },
        onError: () => {
          setSnackbar({
            message: "스토어 생성에 실패했습니다.",
            open: true,
            severity: "warning",
          });
        },
      },
    );
  };

  const handleDeleteRequest = () => {
    deleteQuery.mutate(
      {
        storeRequestId,
      },
      {
        onSuccess: () => {
          setSnackbar({
            message: "스토어 요청이 삭제되었습니다.",
            open: true,
            severity: "success",
          });

          history.goBack();
        },
        onError: () => {
          setSnackbar({
            message: "스토어 요청 삭제에 실패했습니다.",
            open: true,
            severity: "warning",
          });
        },
      },
    );
  };

  return (
    <>
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

        {isLoading && (
          <GridContainer>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          </GridContainer>
        )}

        {isError && (
          <GridContainer>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography color="error">
                에러가 발생했습니다. 다시 시도해주세요.
              </Typography>
            </Box>
          </GridContainer>
        )}

        {!isLoading && !isError && storeRequest && (
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
                  <Chip
                    color={
                      storeRequest.type === StoreRequestTypes.CREATE
                        ? "primary"
                        : "secondary"
                    }
                    label={storeRequest.type}
                  />
                </ListItem>
              </List>
            </PaperBox>

            <PaperBox variant="outlined">
              <Typography variant="h6" gutterBottom>
                주소
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <StoreIcon />
                  </ListItemIcon>
                  <ListItemText primary={storeRequest.address} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Lat: ${storeRequest.loc.coordinates[1]}, Lng: ${storeRequest.loc.coordinates[0]}`}
                  />
                </ListItem>
                <ListItem>
                  <MapDiv
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <Map coordinates={storeRequest.loc.coordinates} />
                  </MapDiv>
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
                운영 시간
              </Typography>
              <List>
                {storeRequest.operatingHours.map((hour, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${hour.day}: ${
                        hour.closed ? "Closed" : `${hour.open} - ${hour.close}`
                      }`}
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
                {storeRequest.socialLinks?.map((link, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    <Link
                      href={link}
                      rel="noopener noreferrer"
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
                <ListItem>
                  {storeRequest.tags?.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      sx={{
                        marginRight: "8px",
                      }}
                    />
                  ))}
                </ListItem>
              </List>
            </PaperBox>
          </GridContainer>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
            marginBottom: "32px",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleDeleteRequest}
            sx={{
              marginRight: "16px",
            }}
          >
            스토어 요청 삭제하기
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateStore}
          >
            스토어 생성하기
          </Button>
        </Box>
      </PageLayout>
    </>
  );
}

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
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
