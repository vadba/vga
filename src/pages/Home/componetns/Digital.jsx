import { useInView } from "react-intersection-observer";
import "../../Contacts/style/fonts/impressionist/stylesheet.css";
import {
  BgImg,
  ColorWrap,
  HomeNewsImgText,
  HomeNewsWrap,
  HomeNewsWrapOverlay,
  HomeWelcomeText,
  HomeWelcomeTitle,
  Single,
  Wrap,
} from "../style/Home.styled.js";
import homeBgNews from "./../../../assets/golian_conf_mod.jpg";

export const Digital = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <>
      <ColorWrap>
        <Wrap>
          <BgImg></BgImg>
          <HomeWelcomeTitle>
            Welcome to the Holian's Analytics Blog
          </HomeWelcomeTitle>
          <HomeWelcomeText>
            Use this section to tease your brand philosophy before you complete
            it in the next section. Etsy sriracha williamsburg thundercats
            literally vinyl selfies distillery squid humblebrag. Glossier
            church-key subway tile squid, artisan pop-up pok pok.
          </HomeWelcomeText>
        </Wrap>
      </ColorWrap>
      <HomeNewsWrap
        layers={[{ image: homeBgNews, speed: -25 }]}
        className="aspect aspect-[2/1]"
        // sx={{
        //   background: `url('${homeBgNews}') fixed top center no-repeat`,
        //   backgroundSize: "cover",
        // }}
      >
        <HomeNewsWrapOverlay />
        <HomeNewsImgText
          ref={ref}
          className={`${inView ? "digital-anime" : "digital"}`}
        >
          Digital transformation is becoming a locomotive for the development of
          Ukraine's economy
          <Single>Golian</Single>
        </HomeNewsImgText>
      </HomeNewsWrap>
    </>
  );
};
