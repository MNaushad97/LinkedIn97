import styled from "styled-components";
import ReactionSection from "./ReactionSection";
import SocialCount from "./SocialCount";
import { useSelector } from "react-redux";

function Post() {
  const user = useSelector((state) => state.userState);
  return (
    <>
      <PostArea className="p-0 overflow-visible">
        <Posts className="flex flex-nowrap items-center mb-2 pr-10 pt-3 pl-4">
          <a className="flex mr-3 grow overflow-hidden  no-underline ">
            <img
              className="w-12 h-12 rounded-full"
              src={`${user?.photo ? user?.photo : "images/user.svg"}`}
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

        <ImageToShare className="flex justify-center relative mt-2 w-full bg-[#f9fafb]">
          <img src="/logo512.png" className="bg-cover  w-ful h-72" alt="" />
        </ImageToShare>
        <SocialCount />
        <hr className="mx-3"></hr>
        <ReactionSection />
      </PostArea>
    </>
  );
}
export default Post;

const PostArea = styled.div``;
const Posts = styled.div``;
const Description = styled.div``;
const ImageToShare = styled.div``;
