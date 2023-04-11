import styled from "styled-components";

function FeedList() {
  return (
    <>
      <Feed className="flex justify-start ml-1.5">
        <ul className="list-disc mb-2">
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-1">
              <a
                href="https://hotel-97.web.app/"
                target={"_blank"}
                rel="noreferrer"
                className=" font-bold text-black/75 text-sm"
              >
                Hotel97 got hosted on firebase
              </a>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                2d ago • 5,376 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-1">
              <a
                href="https://hotel-97.web.app/"
                target={"_blank"}
                rel="noreferrer"
                className=" font-bold text-black/75 text-sm"
              >
                Hotel97 uses Google Map API
              </a>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                2d ago • 4,410 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-1">
              <a
                href="https://disney97-1205e.web.app/"
                target={"_blank"}
                rel="noreferrer"
                className=" font-bold text-black/75 text-sm"
              >
                Disney97 fetches from Firebase
              </a>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                2d ago • 4,348 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-1">
              <a
                href="https://disney97-1205e.web.app/"
                target={"_blank"}
                rel="noreferrer"
                className=" font-bold text-black/75 text-sm"
              >
                Disney97 uses Google's Auth
              </a>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                1d ago • 3446 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-1">
              <a
                href="https://food97-63ba5.web.app/"
                target={"_blank"}
                rel="noreferrer"
                className=" font-bold text-black/75 text-sm"
              >
                Food97 stores order in realTime
              </a>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                1d ago • 2,690 readers
              </p>
            </div>
          </div>
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
