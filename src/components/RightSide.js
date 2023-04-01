import styled from "styled-components";
import FeedList from "./FeedList";

function RightSide() {
  return (
    <Container>
      <FollowCard className="h-[370px]">
        <Title className=" inline-flex justify-between items-center text-base w-full text-black/75 font-semibold">
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList />
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard className="bg-yellow">
        <img className="bg-Cover rounded-md" src="/images/hiring.png" alt="" />
      </BannerCard>
    </Container>
  );
}

export default RightSide;
const Container = styled.div``;
const FollowCard = styled.div`
  width: 300px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 7px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const Title = styled.div``;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  padding: 0;
`;
