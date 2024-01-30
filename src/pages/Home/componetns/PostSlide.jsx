import { TitleSlide } from "../style/Home.styled.js";

export const PostSlide = ({ post }) => {
  return (
    <>
      <TitleSlide className="title">{post.title}</TitleSlide>
    </>
  );
};
