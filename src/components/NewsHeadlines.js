import styled from "styled-components";

function NewsHeadlines({ link, title, readers }) {
  return (
    <>
      <a
        href={link}
        target={"_blank"}
        rel="noreferrer"
        className=" text-black/75 text-sm flex flex-col mb-1 pb-2 pt-0.5 hover:bg-gray-200/70 w-full px-3 items-start "
      >
        <News className="ml-4 ">
          <div className="font-bold">{title}</div>
          <div className="text-xs text-black/60 text-left font- mt-1 ">
            {readers}
          </div>
        </News>
      </a>
    </>
  );
}
export default NewsHeadlines;

const News = styled.li`
  ::marker {
    font-weight: 600;
    font-size: 18px;
  }
`;
