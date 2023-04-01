import styled from "styled-components";

function FeedList() {
  return (
    <>
      <Feed className="flex justify-start ml-1.5">
        <ul className="list-disc mb-2">
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-0.5">
              <h6 className=" font-bold text-black/75 text-sm">
                Top newsletters to follow
              </h6>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                Top News • 1,690 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-0.5">
              <h6 className=" font-bold text-black/75 text-sm">
                Alibaba to split, ready spinoffs
              </h6>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                2d ago • 5,376 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-0.5">
              <h6 className=" font-bold text-black/75 text-sm">
                Startups upbeat about hiring
              </h6>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                2d ago • 2,410 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-0.5">
              <h6 className=" font-bold text-black/75 text-sm">
                Shorter wait for US visas
              </h6>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                2d ago • 4,648 readers
              </p>
            </div>
          </div>
          <div className="flex my-3">
            <span className="mr-3 font-bold ">•</span>
            <div className="flex-col mt-0.5">
              <h6 className=" font-bold text-black/75 text-sm">
                India Inc’s pay hike report card
              </h6>
              <p className="text-xs text-black/60 text-left font-medium mt-1">
                1d ago • 446 readers
              </p>
            </div>
          </div>
        </ul>
      </Feed>
    </>
  );
}
export default FeedList;

const Feed = styled.div``;

// • 1,690 readers India Inc’s pay hike report card 1d ago • 446 readers
// Shorter wait forUS visas 2d ago • 4,648 readers Startups upbeat about hiring 2d ago • 2,410 readers Alibaba to split, ready spinoffs 2d ago •
//               5,376 readers Show more
