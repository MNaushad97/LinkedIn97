function NewsHeadlines({ link, title, readers }) {
  return (
    <>
      <a
        href={link}
        target={"_blank"}
        rel="noreferrer"
        className=" text-black/75 text-sm flex flex-col mb-1 pb-3 pt-0.5 hover:bg-gray-200 w-full px-3 items-start "
      >
        <li className=" ml-3">
          <div className="font-bold">{title}</div>
          <div className="text-xs text-black/60 text-left font- mt-1 ">
            {readers}
          </div>
        </li>
      </a>
    </>
  );
}
export default NewsHeadlines;
