import {
  BgImg,
  ColorWrap,
  HomeWelcomeTitle,
  RecentNewsWrap,
  Wrap,
} from "../style/Home.styled.js";
import { RecentNewsItem } from "./RecentNewsItem/RecentNewsItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostsData } from "../../../redux/slice/recentNewsSlice.js";
import { Container } from "@mui/system";

export const RecentNews = () => {
  const dispatch = useDispatch();

  const { dataCategories } = useSelector((state) => state.categorySlice);

  const iDcategories =
    !!dataCategories && dataCategories.map((category) => category.id);

  useEffect(() => {
    !!iDcategories && dispatch(fetchPostsData(iDcategories));
  }, [dataCategories]);

  const { dataPosts } = useSelector((state) => state.recentNewsSlice);

  return (
    <>
      <ColorWrap>
        <Wrap>
          <BgImg></BgImg>
          <HomeWelcomeTitle>Recent News</HomeWelcomeTitle>
        </Wrap>
      </ColorWrap>
      <Container>
        <RecentNewsWrap>
          {!!dataPosts &&
            dataPosts.map((post) => (
              <RecentNewsItem key={post.id} post={post} />
            ))}
        </RecentNewsWrap>
      </Container>
    </>
  );
};
