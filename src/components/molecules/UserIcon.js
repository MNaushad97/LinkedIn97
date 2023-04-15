import styled from "styled-components";

function UserIcon() {
  return (
    <>
      <User>
        <a>
          <img src="/images/user.svg" alt="" />
          <span>Me</span>
          <img src="/images/down-icon.svg" alt="" />
        </a>

        <SignOut>
          <a>Sign Out</a>
        </SignOut>
      </User>
    </>
  );
}
export default UserIcon;

const User = styled.div``;

/*


*/
