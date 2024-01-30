import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

export const TopColorWrap = styled(Box)(({ theme }) => ({
  height: "300px",
  background: `${theme.palette.background.default}`,
}));

export const Content = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "98%",
  margin: "0 auto",
  marginTop: "-200px",
}));

export const Title = styled(Box)(({ theme }) => ({
  marginBottom: "41px",
  fontSize: "28px",
  fontWeight: "bold",
}));

export const InfoPost = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  marginBottom: "55px",
  color: `${theme.palette.info.main}`,
}));
export const TopImg = styled("img")(({ theme }) => ({
  width: "100%",
  marginBottom: "45px",
}));
export const Body = styled(Typography)(({ theme }) => ({
  textAlign: "Left",
  fontSize: "19px",
  lineHeight: "1.6em",
  color: `${theme.palette.primary.main}`,
}));

export const AuthorWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
}));

export const IconSize = {
  fontSize: 20,
};
