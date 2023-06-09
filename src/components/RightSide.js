import styled from "styled-components";
import FeedList from "./molecules/FeedList";

function RightSide() {
  return (
    <Container className="col-span-3">
      <FollowCard className="h-[320px]">
        <Title className=" inline-flex justify-between items-center text-base w-full text-black/75 font-semibold p-3 pb-2.5">
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList />
      </FollowCard>
      <BannerCard className="flex justify-center items-center ">
        <img
          className="bg-contain  rounded-md"
          src="/images/hiring.png"
          alt=""
        />
      </BannerCard>
    </Container>
  );
}

export default RightSide;
const Container = styled.div`
  //grid-area: rightSide;
  @media only screen and (min-width: 760px) and (max-width: 1024px) {
    display: none;
  }
`;
//using followCard's style also in Banner Card
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 7px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Title = styled.div``;

const BannerCard = styled(FollowCard)`
  padding: 0;
  img {
    width: -webkit-fill-available;
  }
`;

//const Avatar = styled.div`
//   background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 48px;
//   height: 48px;
//   margin-right: 8px;
// `;
