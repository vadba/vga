import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import dateFormat, { masks } from "dateformat";
import { clearPosts } from "../../redux/slice/postsCategorySlice.js";
import { clearPost } from "../../redux/slice/postSlice.js";
import { useParams } from "react-router-dom";
import { fetchPostData } from "../../redux/slice/postSlice.js";
import {
  AuthorWrap,
  Body,
  Content,
  IconSize,
  InfoPost,
  Title,
  TopColorWrap,
  TopImg,
} from "./style/Acricle.styled.js";
import { Container } from "@mui/system";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Article = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPosts());
    dispatch(clearPost());
  }, []);
  const { slug } = useParams();
  useEffect(() => {
    dispatch(fetchPostData(slug));
  }, []);
  const { post } = useSelector((state) => state.postSlice);
  // post && console.log(post.img);
  return (
    <>
      <TopColorWrap></TopColorWrap>
      <Container>
        <Content>
          {!!post && (
            <>
              <Title>{post.title}</Title>
              <InfoPost>
                <AuthorWrap>
                  <PermIdentityOutlinedIcon sx={IconSize} />
                  {post.author}
                </AuthorWrap>
                <AuthorWrap>
                  <AccessTimeOutlinedIcon sx={IconSize} />
                  {dateFormat(post.createdAt, "mmmm dd, yyyy")}
                </AuthorWrap>
                {post.coments}
              </InfoPost>
              <TopImg
                src={!!post.img ? post.img : ""}
                alt="Article img"
              ></TopImg>
              <Body
                dangerouslySetInnerHTML={{
                  __html: `${post.content}`,
                }}
              ></Body>
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Article;
