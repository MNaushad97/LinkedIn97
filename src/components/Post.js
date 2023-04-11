import styled from "styled-components";

function Post() {
  return (
    <>
      <PostArea className="flex flex-wrap items-center mb-2 pr-10 pt-3 pl-4">
        <a className="flex mr-3 grow overflow-hidden  no-underline ">
          <img
            className="w-12 h-12 rounded-full"
            src="images/user.svg"
            alt=""
          />
          <div className="flex flex-col  ml-2 overflow-hidden">
            <span className="text-sm font-bold ">Title</span>
            <span className="text-xs ">Info</span>
            <span className="text-xs ">Date</span>
          </div>
        </a>
        <button className="absolute right-3 top-0 ">
          <img src="images/threeDots.svg" alt="" />
        </button>
        <Description>Description is here</Description>
        <ImageToShare className="bg-gray-600">
          <img src="/logo512.png" alt="" />
        </ImageToShare>
      </PostArea>
    </>
  );
}
export default Post;

const PostArea = styled.div``;
const Description = styled.div``;
const ImageToShare = styled.div``;
