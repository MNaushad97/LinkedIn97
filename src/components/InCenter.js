import styled from "styled-components";

function InCenter() {
  return (
    <>
      <Container className="sm:col-span-9 lg:col-span-6 ">
        <ShareBox className="flex flex-col text-[#958b7b] mb-2 bg-white">
          Hi There
        </ShareBox>

        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>{" "}
          I
          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Event</span>
          </button>
        </div>
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

const ShareBox = styled(CommonCard)``;
