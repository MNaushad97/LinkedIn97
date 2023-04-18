import styled from "styled-components";

function NavIcon({ img, title }) {
  return (
    <>
      <Icon
        className={`NavIcon flex items-center ${
          title === "Home" ? "active" : ""
        }`}
      >
        <a
          href="home"
          className="relative flex flex-col items-center justify-center min-h-[52px] min-w-[80px] bg-transparent text-sm leading-6 font-normal no-underline
          max-[768px]:min-w-[70px]	"
        >
          <img src={`/images/nav-${img}`} alt="" />
          <span className="text-black/60 flex items-center hover:text-black/90 active:text-black/90 ">
            {title}
          </span>
        </a>
      </Icon>
    </>
  );
}
export default NavIcon;

export const Icon = styled.li`
  a {
    @media (max-width: 768px) {
      min-width: 60px;
    }
  }
`;

/*
const NavList = styled.li`
  a {
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
*/
