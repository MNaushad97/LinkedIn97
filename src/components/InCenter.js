import styled from "styled-components";
import ShareBoxIcons from "./ShareBoxIcons";

function InCenter() {
  return (
    <>
      <Container className="sm:col-span-9 lg:col-span-6 ">
        <ShareBox className=" flex flex-col text-[#958b7b] mb-2 bg-white">
          <div className="ShareBoxDiv flex items-center px-4 pt-2">
            <img
              className="w-12 rounded-full mr-2"
              src="/images/user.svg"
              alt=""
            />
            <button className="flex-grow pl-4 my-2 rounded-full text-left bg-white border border-solid border-black/20">
              Start a post
            </button>
          </div>
          <div className="flex flex-wrap justify-around pb-2">
            <ShareBoxIcons icon="photo-icon" iconText="Photo" />
            <ShareBoxIcons icon="video-icon" iconText="Video" />
            <ShareBoxIcons icon="event-icon" iconText="Event" />
            <ShareBoxIcons icon="article-icon" iconText="Write article" />
          </div>
        </ShareBox>
      </Container>
    </>
  );
}

export default InCenter;

const Container = styled.div`
  //grid-area: inCenter;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
`;

const ShareBox = styled(CommonCard)`
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
`;
