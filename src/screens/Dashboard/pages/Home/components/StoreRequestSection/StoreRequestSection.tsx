import {
  Box,
  CircularProgress,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useIntersect } from "@common/hooks/useIntersect";
import { StoreRequest } from "@common/repositories/admin/types";
import { storeRequestPath } from "@common/router/paths/paths";
import { Uri } from "@common/service/api/url";
import { snackbarAtom } from "@common/store/atoms/snackbarAtom";

import { useStoreRequests } from "../../queries/useStoreRequests";
import { StoreRequestCard } from "../StoreRequestCard/StoreRequestCard";

const groupByDate = (
  storeRequests: StoreRequest[],
): Record<string, StoreRequest[]> => {
  return storeRequests.reduce(
    (groups, storeRequest) => {
      const date = new Date(storeRequest.createdAt).toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }

      groups[date].push(storeRequest);

      return groups;
    },
    {} as Record<string, StoreRequest[]>,
  );
};

export function StoreRequestSection() {
  const {
    data,
    error,
    isError,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useStoreRequests();

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  const setSnackbar = useSetAtom(snackbarAtom);

  const scrollTargetRef = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      void fetchNextPage();
    }
  });

  useEffect(() => {
    if (isError) {
      setSnackbar({
        message: "스토어 요청을 불러오는데 실패했습니다.",
        open: true,
        severity: "warning",
      });
    }
  }, [isError, setSnackbar]);

  const allStoreRequests = data?.pages.flatMap((page) => page.data.data) || [];

  const groupedStoreRequests = groupByDate(allStoreRequests);

  const sortedDates = Object.keys(groupedStoreRequests).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  );

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <>
      {sortedDates.map((date) => (
        <Box key={date}>
          <Divider
            sx={{
              marginTop: "24px",
              marginBottom: "24px",
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
          </Divider>
          <GridWrapper>
            {groupedStoreRequests[date].map((storeRequest: StoreRequest) => (
              <Link
                key={storeRequest._id}
                underline="none"
                component={RouterLink}
                to={Uri.buildLinkUrl({
                  path: storeRequestPath,
                  pathVariables: { storeRequestId: storeRequest._id },
                })}
              >
                <StoreRequestCard storeRequest={storeRequest} />
              </Link>
            ))}
          </GridWrapper>
        </Box>
      ))}
      <Box ref={scrollTargetRef} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {(isFetching || isFetchingNextPage) && <CircularProgress />}
      </Box>
    </>
  );
}

const GridWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)", // 기본값: 1920px 이상에서 5열
  gap: "10px",
  margin: "0 auto",
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    // 1280px 이상 1920px 미만
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  [theme.breakpoints.down("lg")]: {
    // 960px 이상 1280px 미만
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    // 600px 이상 960px 미만
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    // 600px 미만
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));
