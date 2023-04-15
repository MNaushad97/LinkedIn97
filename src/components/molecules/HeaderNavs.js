import styled from "styled-components";
import NavIcon from "../atoms/NavIcon";
import { Icon } from "../atoms/NavIcon";

function HeaderNavs() {
  return (
    <>
      <Nav className=" Nav block  ">
        <NavIconWrapper className="NavIconWrapper flex flex-nowrap justify-between list-none ">
          <NavIcon img="home.svg" title="Home" />
          <NavIcon img="network.svg" title="My Network" />
          <NavIcon img="jobs.svg" title="Jobs" />
          <NavIcon img="messaging.svg" title="Messaging" />
          <NavIcon img="notifications.svg" title="Notifications" />
          <UserNav>
            <a>
              <img src="/images/user.svg" alt="" />
              <span>
                Me
                <img src="/images/down-icon.svg" alt="" />
              </span>
            </a>

            <SignOut className="absolute top-11 bg-white rounded-r-md rounded-l-md w-24 h-10 text-base text-center hidden duration-150">
              <a>Sign Out</a>
            </SignOut>
          </UserNav>
          <Work>
            <a>
              <img src="/images/nav-work.svg" alt="" />
              <span>
                Work
                <img src="/images/down-icon.svg" alt="" />
              </span>
            </a>
          </Work>
        </NavIconWrapper>
      </Nav>
    </>
  );
}
export default HeaderNavs;

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 100%;
  }
`;
const NavIconWrapper = styled.ul`
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const SignOut = styled.div``;

const UserNav = styled(Icon)`
  //this time we have used this so that other(Work) component can borrow styles
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      // have used ${SignOut} in a way to access named style as it is in template literals
      align-items: center;
      display: flex; //changed display from none to flex
      justify-content: center;
      cursor: pointer;
    }
  }
`;

const Work = styled(UserNav)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
/*


*/
