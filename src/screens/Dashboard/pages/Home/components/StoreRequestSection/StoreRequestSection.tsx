import { Box, Divider, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import { useIntersect } from "@common/hooks/useIntersect";
import { StoreRequest } from "@common/repositories/admin/types";
import { storeRequestPath } from "@common/router/paths/paths";
import { Uri } from "@common/service/api/url";

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

  const scrollTargetRef = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      void fetchNextPage();
    }
  });

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <Typography>Error: {error.message}</Typography>;
  }

  const allStoreRequests = data?.pages.flatMap((page) => page.data.data) || [];

  const groupedStoreRequests = groupByDate(allStoreRequests);

  const sortedDates = Object.keys(groupedStoreRequests).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  // 링크 없애기

  // index 수정

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
                  pathVariables: { storerequestId: storeRequest._id },
                })}
              >
                <StoreRequestCard storeRequest={storeRequest} />
              </Link>
            ))}
          </GridWrapper>
        </Box>
      ))}
      <Box ref={scrollTargetRef} />
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
