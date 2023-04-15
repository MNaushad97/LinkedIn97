import styled from "styled-components";

import Post from "./Post";
import ShareBoxIcons from "./ShareBoxIcons";
import SocialCount from "./SocialCount";

function InCenter() {
  return (
    <>
      <Container className="sm:col-span-9 lg:col-span-6 ">
        <ShareBox>
          <div className="ShareBoxDiv flex items-center px-4 pt-2">
            <img src="/images/user.svg" alt="" />
            <button>Start a post</button>
          </div>
          <div className="flex flex-wrap justify-around pb-2">
            <ShareBoxIcons icon="photo-icon" iconText="Photo" />
            <ShareBoxIcons icon="video-icon" iconText="Video" />
            <ShareBoxIcons icon="event-icon" iconText="Event" />
            <ShareBoxIcons icon="article-icon" iconText="Write article" />
          </div>
        </ShareBox>

        <PostArea>
          <Post />
        </PostArea>
      </Container>
    </>
  );
}

export default InCenter;

const Container = styled.div`
  //grid-area: inCenter;
`;

const CommonCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  color: #958b7b;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
`;

const ShareBox = styled(CommonCard)`
  .ShareBoxDiv {
    img {
      width: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }
    button {
      display: flex;
      align-items: center;
      flex-grow: 1;
      margin: 4px 0;
      padding-left: 16px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      outline: none;
      font-weight: 600;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 35px;
      background-color: white;
      text-align: left;
    }
  }
`;

const PostArea = styled(CommonCard)``;
