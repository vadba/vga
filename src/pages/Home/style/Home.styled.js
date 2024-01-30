import { Box, styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import BgImage from "./../../../assets/whitedoodle.png";
import { ParallaxBanner } from "react-scroll-parallax";

export const SwipSlide = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
}));

export const SlideLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.slide.main}`,
  fontWeight: "500",
  transition: "all .5s",
}));

export const BgSlide = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  // backgroundPositionY: "top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

export const TitleSlide = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "5.5%",
  top: "50%",
  transform: "translateY(-50%)",
  width: "45%",
  padding: "80px 20px",
  textAlign: "center",
  fontSize: "35px",
  fontWeight: "bold",
  backgroundColor: "white",
  opacity: "0.7",
  "&:hover": {
    color: `${theme.palette.primary.main}`,
    // textDecoration: "underline",
    // textUnderlineOffset: "9px",
  },
}));

export const ColorWrap = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
}));
export const Wrap = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "0 auto",
  padding: "7% 0",
  width: "50%",
  background: "transparent",
}));

export const BgImg = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0px",
  left: "0px",
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "50% 50%",
  transform: "scale(1.2) translate(0px, 0px) rotate(54deg)",
}));

export const HomeWelcomeTitle = styled(Box)(({ theme }) => ({
  zIndex: "1",
  position: "relative",
  fontSize: "40px",
  color: `${theme.palette.secondary.main}`,
}));

export const HomeWelcomeText = styled(Box)(({ theme }) => ({
  zIndex: "1",
  position: "relative",
  fontSize: "14px",
  marginTop: "24px",
  color: `${theme.palette.info.main}`,
}));

export const HomeNewsWrap = styled(ParallaxBanner)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  // filter: "brightness(75%)",
}));

export const HomeNewsWrapOverlay = styled(ParallaxBanner)(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  opacity: 0.3,
}));

export const HomeNewsImgText = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  color: `${theme.palette.login.main}`,
  fontSize: "44px",
  fontWeight: "bold",
}));

export const Single = styled(Box)(({ theme }) => ({
  marginTop: "5%",
  fontFamily: "Impressionist",
  fontSize: "30px",
  color: `${theme.palette.background.paper}`,
}));

export const RecentNewsWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "2%",
  width: "99%",
  margin: "-5% auto",
  marginBottom: "1%",
}));
