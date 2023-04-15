import styled from "styled-components";
import NewsHeadlines from "../atoms/NewsHeadlines";

function FeedList() {
  return (
    <>
      <Feed className="flex justify-start ">
        <ul className="list-disc w-full">
          <NewsHeadlines
            title="Hotel97 got hosted on firebase"
            readers="2d ago • 5,376 readers"
            link="https://hotel-97.web.app/"
          />
          <NewsHeadlines
            title="Hotel97 uses Google Map API"
            readers="2d ago • 4,410 readers"
            link="https://hotel-97.web.app/"
          />
          <NewsHeadlines
            title="Disney97 fetches from Firebase"
            readers="2d ago • 4,348 readers"
            link="https://disney97-1205e.web.app/"
          />
          <NewsHeadlines
            title="Disney97 uses Google's Auth"
            readers="1d ago • 3446 readers"
            link="https://disney97-1205e.web.app/"
          />
          <NewsHeadlines
            title="Food97 stores orders in realTime"
            readers="1d ago • 2,690 readers"
            link="https://food97-63ba5.web.app/"
          />
        </ul>
      </Feed>
    </>
  );
}
export default FeedList;

const Feed = styled.div`
  span {
    font-size: larger;
    opacity: 0.6;
  }
`;

// • 1,690 readers India Inc’s pay hike report card 1d ago • 446 readers
// Shorter wait forUS visas 2d ago • 4,648 readers Startups upbeat about hiring 2d ago • 2,410 readers Alibaba to split, ready spinoffs 2d ago •
//               5,376 readers Show more
