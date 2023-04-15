import ReactionButton from "./ReactionButtons";

function ReactionSection() {
  return (
    <>
      <ReactionButton icon="like-icon.png" flip />
      <ReactionButton icon="comment-icon.svg" />
      <ReactionButton icon="repost-icon.svg" />
      <ReactionButton icon="send-icon.svg" />
    </>
  );
}
export default ReactionSection;
