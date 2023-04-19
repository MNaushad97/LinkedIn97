function ReactionButton({ icon, isPNG = false, title }) {
  return (
    <>
      <button className="flex col-span-1 justify-center items-center text-[#666666]  text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-200/70">
        <img
          src={`/images/${icon}`}
          alt=""
          className={`${isPNG && "w-6 h-6"} mr-1`}
        />
        <span>{title}</span>
      </button>
    </>
  );
}
export default ReactionButton;
