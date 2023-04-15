function ReactionButton({ icon }) {
  return (
    <>
      <button>
        <img src={`/images/${icon}.svg`} alt="" />
      </button>
    </>
  );
}
export default ReactionButton;
