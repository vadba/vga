import { Box, styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const ArticleShort = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  "&:hover .article-img-brightness": {
    filter: "brightness(85%)",
  },
}));

export const ArticleImg = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  maxHeight: "none",
  maxWidth: "none",
  transition: "all .9s ease",
  "&:hover": {
    cursor: "pointer",
  },
}));

export const ArticleTitle = styled(NavLink)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: "600",
  textAlign: "left",
  marginTop: "25px",
  marginBottom: "13px",
  color: "black",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    cursor: "pointer",
  },
}));

export const ArticleAuthorDate = styled(Box)(({ theme }) => ({
  textAlign: "left",
}));

export const ArticleAuthor = styled("span")(({ theme }) => ({
  fontSize: "15px",
  textAlign: "left",
  color: `${theme.palette.info.main}`,
}));

export const ArticleDate = styled("span")(({ theme }) => ({
  marginLeft: "5px",
  fontSize: "15px",
  textAlign: "left",
  color: `${theme.palette.info.main}`,
  "&:before": {
    content: "'|'",
    marginRight: "5px",
  },
}));

export const ArticleShortContent = styled(Box)(({ theme }) => ({
  marginTop: "15px",
  fontSize: "18px",
  textAlign: "left",
  lineHeight: "1.7em",
  color: `${theme.palette.primary.main}`,
}));

export const ArticleSReadMore = styled(NavLink)(({ theme }) => ({
  marginTop: "15px",
  fontSize: "16px",
  textAlign: "left",
  lineHeight: "1.7em",
  fontWeight: "600",
  color: `${theme.palette.primary.main}`,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    cursor: "pointer",
  },
}));
