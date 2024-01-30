import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ModalWindow } from "../../../ModalWindow/ModalWindow.jsx";
import { useRef, useState } from "react";
import { ImgModal } from "../../../ModalWindow/style/ModalWindow.styled.js";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export const ImagesList = () => {
  const [imgCreateLink, setImgCreateLink] = useState();
  const [imgCreate, setimgCreate] = useState(false);
  const [imgH, setImgH] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgTitle, setImgTitle] = useState(false);
  const [imgLink, setimgLink] = useState(false);

  const imgRef = useRef();

  const ImageShow = (src, alt, e) => {
    setImgCreateLink(e.target.src);
    setimgCreate(true);
    setImgTitle(alt);
    setimgLink(src);
    setTimeout(() => {
      setImgH(!!imgRef.current && imgRef.current.naturalHeight);
      setIsOpen(true);
    });
  };

  return (
    <>
      {!!isOpen && (
        <ModalWindow
          imgGreate={setimgCreate}
          setIsOpen={setIsOpen}
          imgTitle={imgTitle}
          imgLink={imgLink}
          imgH={imgH}
        />
      )}
      {!!imgCreate && (
        <ImgModal
          ref={imgRef}
          sx={{
            display: "none",
          }}
          src={imgCreateLink}
        />
      )}

      <ImageList
        sx={{ width: "100%" }}
        variant="quilted"
        cols={5}
        rowHeight={121}
        gap={17}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            onClick={(e) => {
              ImageShow(item.img, item.title, e);
            }}
            sx={{ cursor: "pointer" }}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

const itemData = [
  {
    img: "https://res.cloudinary.com/dedktv1bx/image/upload/v1703227616/img_galery/net_profit_ng3bfx.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dedktv1bx/image/upload/v1703227566/img_galery/export_c5kcez.jpg",
    title: "Burger",
  },
  {
    img: "https://res.cloudinary.com/dedktv1bx/image/upload/v1703227641/img_galery/prod_export_etxjpb.jpg",
    title: "Camera",
  },
  {
    img: "https://res.cloudinary.com/dedktv1bx/image/upload/v1703227519/img_galery/IT_profit_mblz12.jpg",
    title: "Coffee",
    // cols: 2,
    rows: 2,
  },
  {
    img: "https://res.cloudinary.com/dedktv1bx/image/upload/v1703227658/img_galery/price_gas_anu7xp.jpg",
    title: "Honey",
    author: "@arwinneil",
    // rows: 2,
    cols: 2,
  },
  // {
  //   img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  //   title: "Hats",
  //   cols: 2,
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  //   title: "Basketball",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //   title: "Fern",
  // },
  // {
  //   img: "https://plus.unsplash.com/premium_photo-1664303714911-f89d3021e9b4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "potato",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //   title: "Tomato basil",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //   title: "Sea star",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //   title: "Bike",
  //   cols: 2,
  // },
];
