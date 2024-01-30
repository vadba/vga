import {
  ArticleAuthor,
  ArticleAuthorDate,
  ArticleDate,
  ArticleImg,
  ArticleShort,
  ArticleShortContent,
  ArticleSReadMore,
  ArticleTitle,
} from "./style/PostShort.styled.js";
import { NavLink } from "react-router-dom";
import dateFormat from "dateformat";

const PostShort = ({ post }) => {
  return (
    <ArticleShort>
      <NavLink to={post.id}>
        <ArticleImg
          src={!!post.img ? post.img : ""}
          alt="post img"
          className="article-img-brightness"
        />
      </NavLink>
      <ArticleTitle to={post.id}>{post.title}</ArticleTitle>
      <ArticleAuthorDate>
        <ArticleAuthor>{post.author}</ArticleAuthor>
        <ArticleDate>{dateFormat(post.createdAt, "mmmm dd, yyyy")}</ArticleDate>
      </ArticleAuthorDate>
      <ArticleShortContent>
        {!!post.short && post.short.slice(0, 170)}.
      </ArticleShortContent>
      <ArticleSReadMore to={post.id}>Read More...</ArticleSReadMore>
    </ArticleShort>
  );
};

export default PostShort;
