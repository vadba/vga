import { Box } from "@mui/system";
import {
  BoxCenter,
  BoxCenterWrap,
  CancelIconUs,
  ImgModal,
  overlay,
} from "./style/ModalWindow.styled.js";

export const ModalWindow = ({
  imgGreate,
  setIsOpen,
  imgTitle,
  imgLink,
  imgH,
}) => {
  let flag = false;
  if (window.innerWidth < window.innerHeight * 1.4) {
  } else if (imgH > window.innerHeight * 0.8) {
    flag = true;
  }
  return (
    <>
      <Box
        sx={overlay}
        onClick={() => {
          imgGreate(false);
          setIsOpen(false);
        }}
      ></Box>
      <BoxCenterWrap>
        <CancelIconUs
          onClick={() => {
            imgGreate(false);
            setIsOpen(false);
          }}
        />
        <BoxCenter
          sx={
            flag && {
              height: "95vh",
            }
          }
        >
          <ImgModal src={imgLink} alt={imgTitle} />
        </BoxCenter>
      </BoxCenterWrap>
    </>
  );
};
