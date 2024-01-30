import {
  Categoty,
  Content,
  ImgWrap,
  RecentNewsItemWrap,
  Title,
} from "./style/RecentNewsItem.styled.js";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const RecentNewsItem = ({ post }) => {
  const { dataCategories } = useSelector((state) => state.categorySlice);

  return (
    <>
      <RecentNewsItemWrap>
        <NavLink
          key={post.id}
          to={`${
            dataCategories.filter((item) => item.id === post.categories[0])[0]
              .idName
          }/${post.id}`}
        >
          <ImgWrap
            style={{
              backgroundImage: `url('${!!post.img ? post.img : ""}')`,
            }}
          ></ImgWrap>
        </NavLink>
        <Content>
          {dataCategories
            .filter((item) => item.id === post.categories[0])
            .map((category) => (
              <Categoty key={category.idName} to={category.idName}>
                {category.name}
              </Categoty>
            ))}

          <Title
            key={post.id}
            to={`${
              dataCategories.filter((item) => item.id === post.categories[0])[0]
                .idName
            }/${post.id}`}
          >
            {post.title}
          </Title>
        </Content>
      </RecentNewsItemWrap>
    </>
  );
};
