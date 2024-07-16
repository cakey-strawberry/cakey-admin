import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSetAtom } from "jotai";
import { FormEvent } from "react";

import logo from "@assets/logo.svg";
import { api } from "@common/service/api/api";
import { authAtom } from "@common/store/atoms/authAtom";

import { useSignIn } from "./queries/useSignIn";

export function Auth() {
  const setAuth = useSetAtom(authAtom);

  const { mutate } = useSignIn();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    mutate(
      {
        params: {
          id: data.get("adminId") as string,
          code: data.get("password") as string,
        },
      },
      {
        onSuccess: (response) => {
          const { adminToken } = response.data;

          api.applyCredentials({
            token: adminToken,
          });

          setAuth(true);
        },
        onError: (error) => {
          if (error.status >= 500) {
            alert(`서버 에러입니다`);
          } else {
            alert(`로그인에 실패했습니다.`);
          }
        },
      },
    );
  };

  return (
    <Page>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <FormWrapper>
          <Subtitle>CAKEYMAP ADMIN CONSOLE</Subtitle>
          <Description>케이키맵 관리자용 콘솔입니다</Description>
          <Spacer />
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="adminId"
              label="관리자 아이디"
              name="adminId"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="관리자 코드"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </Box>
        </FormWrapper>
      </Wrapper>
    </Page>
  );
}

const Page = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  width: "376px",
  borderRadius: "8px",
  padding: "24px",
  boxSizing: "border-box",
  border: "1px solid #e0e0e0",
});

const LogoWrapper = styled("div")({
  width: "40%",
  alignSelf: "center",
  marginTop: "24px",
  marginBottom: "24px",
});

const Logo = styled("img")({
  width: "100%",
  height: "100%",
});

const FormWrapper = styled("div")({
  flex: 1,
  backgroundcolor: "red",
});

const Subtitle = styled(Typography)({
  variant: "subtitle1",
  fontWeight: 700,
  textAlign: "center",
});

const Description = styled(Typography)({
  variant: "body2",
  textAlign: "center",
});

const Spacer = styled("div")({
  height: "32px",
});
