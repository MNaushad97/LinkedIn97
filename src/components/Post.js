import styled from "styled-components";
import SocialCount from "./SocialCount";

function Post() {
  return (
    <>
      <PostArea className="mb-2 p-0 overflow-visible">
        <Posts className="flex flex-nowrap items-center mb-2 pr-10 pt-3 pl-4">
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
        </Posts>

        <Description className="px-4 overflow-hidden text-sm text-left text-black/90">
          Description is here
        </Description>
        <ImageToShare className="block relative mt-2 w-full bg-[#f9fafb] ">
          <img src="/logo512.png" className="bg-cover" alt="" />
        </ImageToShare>
        <SocialCount />
      </PostArea>
    </>
  );
}
export default Post;

const PostArea = styled.div``;
const Posts = styled.div``;
const Description = styled.div``;
const ImageToShare = styled.div``;
