import styled from "styled-components";
import NavIcon from "./NavIcon";

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

/*


*/
