import { Divider, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import { storeRequestPath } from "@common/router/paths/paths";
import { Uri } from "@common/service/api/url";

import { StoreRequestCard } from "../StoreRequestCard/StoreRequestCard";

const stores = [
  {
    _id: "1",
    name: "어쩌구 저쩌구 스토어",
    address:
      "서울 특별시 뭐시기 저시기 서울 특별시 뭐시기 저시기서울 특별시 뭐시기 저시기서울 특별시 뭐시기 저시기서울 특별시 뭐시기 저시기",
    tags: ["tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2"],
    thumbnail: "https://picsum.photos/400",
    reviews: [],
    loc: {
      type: "Point",
      coordinates: [0, 0],
    },
    operatingHours: [
      { day: "Monday", open: "9:00", close: "18:00", closed: false },
    ],
    addedBy: "user1",
    updatedBy: "user2",
    socialLinks: ["http://example.com"],
  },
  {
    _id: "2",
    name: "Store 1",
    address: "123 Main St",
    tags: ["tag1", "tag2"],
    thumbnail: "https://picsum.photos/400",
    reviews: [],
    loc: {
      type: "Point",
      coordinates: [0, 0],
    },
    operatingHours: [
      { day: "Monday", open: "9:00", close: "18:00", closed: false },
    ],
    addedBy: "user1",
    updatedBy: "user2",
    socialLinks: ["http://example.com"],
  },
  {
    _id: "3",
    name: "Store 1",
    address: "123 Main St",
    tags: ["tag1", "tag2"],
    thumbnail: "https://picsum.photos/400",
    reviews: [],
    loc: {
      type: "Point",
      coordinates: [0, 0],
    },
    operatingHours: [
      { day: "Monday", open: "9:00", close: "18:00", closed: false },
    ],
    addedBy: "user1",
    updatedBy: "user2",
    socialLinks: ["http://example.com"],
  },
  {
    _id: "4",
    name: "Store 1",
    address: "123 Main St",
    tags: ["tag1", "tag2"],
    thumbnail: "https://picsum.photos/400",
    reviews: [],
    loc: {
      type: "Point",
      coordinates: [0, 0],
    },
    operatingHours: [
      { day: "Monday", open: "9:00", close: "18:00", closed: false },
    ],
    addedBy: "user1",
    updatedBy: "user2",
    socialLinks: ["http://example.com"],
  },
  {
    _id: "5",
    name: "Store 1",
    address: "123 Main St",
    tags: ["tag1", "tag2"],
    thumbnail: "https://picsum.photos/400",
    reviews: [],
    loc: {
      type: "Point",
      coordinates: [0, 0],
    },
    operatingHours: [
      { day: "Monday", open: "9:00", close: "18:00", closed: false },
    ],
    addedBy: "user1",
    updatedBy: "user2",
    socialLinks: ["http://example.com"],
  },
];

export function StoreRequestSection() {
  return (
    <Link
      underline="none"
      component={RouterLink}
      to={Uri.buildLinkUrl({
        path: storeRequestPath,
        pathVariables: { storerequestId: 12 },
      })}
    >
      <Divider
        sx={{
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <Typography variant="subtitle1" color="text.secondary">
          Today
        </Typography>
      </Divider>
      <GridWrapper>
        {stores.map((store) => (
          <StoreRequestCard key={store._id} />
        ))}
      </GridWrapper>
    </Link>
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
