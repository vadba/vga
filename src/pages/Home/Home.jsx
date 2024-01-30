import { useDispatch } from "react-redux";
import { clearPosts } from "../../redux/slice/postsCategorySlice.js";
import { useEffect } from "react";
import { Slider } from "./componetns/SwiperSlider.jsx";
import { Digital } from "./componetns/Digital.jsx";
import { RecentNews } from "./componetns/RecentNews.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  return (
    <>
      <Slider />
      <ParallaxProvider>
        <Digital />
      </ParallaxProvider>
      <RecentNews />
    </>
  );
};

export default Home;
