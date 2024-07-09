import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSetAtom } from "jotai";
import { FormEvent } from "react";

import logo from "@assets/logo.svg";
import { ADMIN_TOKEN, DEV_ADMIN_TOKEN } from "@common/constants/constants";
import { authAtom } from "@common/store/atoms/authAtom";

export function Auth() {
  const setAuth = useSetAtom(authAtom);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    localStorage.setItem(
      process.env.NODE_ENV === "development" ? DEV_ADMIN_TOKEN : ADMIN_TOKEN,
      "1234",
    );
    setAuth(true);
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
