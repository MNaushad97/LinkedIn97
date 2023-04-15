import styled from "styled-components";
import ReactionIcons from "./ReactionIcons";

function SocialCount() {
  return (
    <>
      <SocialCounts className=" flex justify-between items-center mx-4 py-2 text-center text-xs ">
        <div className="flex">
          <ReactionIcons src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
          <ReactionIcons src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" />
          <ReactionIcons src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus" />
          <ReactionIcons src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1" />
          <ReactionIcons src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" />
          <span className="ml-3 ">Naushad and 97 others</span>
        </div>

        <span>97 Comments</span>
      </SocialCounts>
    </>
  );
}

export default SocialCount;

const SocialCounts = styled.div``;
