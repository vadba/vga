import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-coverflow";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectFade,
  Autoplay,
  Zoom,
} from "swiper/modules";
import "../style/style.scss";
import { fetchPostsData } from "../../../redux/slice/postsSliderSlice.js";
import { PostSlide } from "./PostSlide.jsx";
import { BgSlide, SlideLink, SwipSlide } from "../style/Home.styled.js";
import { Box } from "@mui/system";

export const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsData());
  }, []);
  const { dataCategories } = useSelector((state) => state.categorySlice);
  const { dataPosts } = useSelector((state) => state.postsSliderSlice);

  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Autoplay,
        // EffectFade,
        // EffectCoverflow,
        // Zoom,
      ]}
      // effect={"fade"}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      navigation={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      className=""
    >
      {!!dataPosts &&
        dataPosts.map((post) => (
          <SwipSlide key={post.id}>
            <SlideLink
              to={`/${
                !!dataCategories &&
                dataCategories.find((item) => item.id === post.categories[0])
                  .idName
              }/${post.id}`}
            >
              <BgSlide
                style={{
                  backgroundImage: `url('${!!post.img ? post.img : ""}')`,
                }}
                className="bg"
              ></BgSlide>
              <PostSlide post={post} />
            </SlideLink>
          </SwipSlide>
        ))}
    </Swiper>
  );
};
