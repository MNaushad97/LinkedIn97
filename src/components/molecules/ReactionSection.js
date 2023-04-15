import ReactionButton from "../atoms/ReactionButtons";

function ReactionSection() {
  return (
    <>
      <div className="grid grid-cols-4 sm:gap-x-1 sm:px-3 py-1">
        <ReactionButton icon="like-icon.png" isPNG title="Like" />
        <ReactionButton icon="comment-icon.svg" title="Comment" />
        <ReactionButton icon="repost-icon.png" isPNG title="Repost" />
        <ReactionButton icon="send-icon.svg" title="Send" />
      </div>
    </>
  );
}
export default ReactionSection;
