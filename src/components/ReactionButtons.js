function ReactionButton({ icon, flip = false }) {
  return (
    <>
      <button>
        <img
          src={`/images/${icon}`}
          alt=""
          className={`${flip && "-scale-x-100 w-8 h-8"}`}
        />
      </button>
    </>
  );
}
export default ReactionButton;
