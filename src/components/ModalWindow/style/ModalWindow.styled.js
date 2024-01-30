import { Box, styled } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";

export const overlay = {
  zIndex: 1,
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

export const BoxCenterWrap = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "77%",
}));

export const CancelIconUs = styled(CancelIcon)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: -35,
  cursor: "pointer",
  color: "red",
  transition: ".6s color",
  "&:hover": {
    color: "green",
  },
}));

export const BoxCenter = styled(Box)(({ theme }) => ({
  overflow: "auto",
}));

export const ImgModal = styled("img")(({ theme }) => ({
  width: "100%",
}));
