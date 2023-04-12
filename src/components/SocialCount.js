import styled from "styled-components";

function SocialCount() {
  return (
    <>
      <SocialCounts className="">
        <li>
          <button>
            <img
              src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
              alt=""
            />
          </button>

          <button>
            <img
              src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
              alt=""
            />
          </button>
        </li>
        <li>
          <span>2 Comments</span>
        </li>
      </SocialCounts>
    </>
  );
}

export default SocialCount;

const SocialCounts = styled.div``;
