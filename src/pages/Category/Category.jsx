import { useDispatch, useSelector } from "react-redux";
import { fetchPostsData } from "../../redux/slice/postsCategorySlice.js";
import { useEffect } from "react";
import { CategoryHeader, CategoryWrap } from "./style/Category.styled.js";
import PostShort from "../../components/PostShort/PostShort.jsx";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import { clearPost } from "../../redux/slice/postSlice.js";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { dataCategories } = useSelector((state) => state.categorySlice);

  const { id, idName } =
    !!category &&
    !!dataCategories.length &&
    dataCategories.find((item) => item.idName === category);

  useEffect(() => {
    const args = { category: id, postId: false };
    !!id && dispatch(fetchPostsData(args));
  }, [id]);

  const { posts } = useSelector((state) => state.postsCategorySlice);

  return (
    <>
      <CategoryHeader>
        {!!id && idName.replace("-", "").toUpperCase()}
      </CategoryHeader>

      {!!posts[0] && (
        <Container>
          <CategoryWrap>
            {posts.map((post) => (
              <PostShort post={post} key={post.id} />
            ))}
          </CategoryWrap>
        </Container>
      )}
    </>
  );
};

export default Category;
