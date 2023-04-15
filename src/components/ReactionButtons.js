function ReactionButton({ icon, isPNG = false, title }) {
  return (
    <>
      <button className="flex justify-center text-[#666666] font-medium py-3 px-2 rounded-md hover:bg-gray-200/70">
        <img
          src={`/images/${icon}`}
          alt=""
          className={`${isPNG && "w-6 h-6"} mr-2`}
        />
        <span>{title}</span>
      </button>
    </>
  );
}
export default ReactionButton;
