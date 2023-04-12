function NewsHeadlines({ link, title, readers }) {
  return (
    <>
      <li className="flex flex-col my-3 bg-gray-200 w-full items-start ">
        <a
          href={link}
          target={"_blank"}
          rel="noreferrer"
          className=" font-bold text-black/75 text-sm"
        >
          <span className="text-black text-left">•</span> {title}
        </a>
        <div className="text-xs text-black/60 text-left font-medium mt-1">
          {readers}
        </div>
      </li>
    </>
  );
}
export default NewsHeadlines;
