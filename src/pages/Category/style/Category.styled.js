import { Box, styled } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export const CategoryHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "90px",
  height: "240px",
  fontSize: "36px",
  fontWeight: "800",
  backgroundColor: `${theme.palette.categoryHeadBg}`,
}));

export const CategoryWrap = styled(Box)(({ theme }) => ({
  width: "95%",
  margin: "0 auto",
  marginTop: "-105px",
  display: "grid",
  gridTemplateColumns: useMediaQuery(theme.breakpoints.up("cm"))
    ? "repeat(2,1fr)"
    : "repeat(1,1fr)",
  gridColumnGap: "3%",
  gridRowGap: "4%",
  justifyContent: "center",
}));
