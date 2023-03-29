import styled from "styled-components";
import HeaderNavs from "./HeaderNavs";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <>
      <HeaderContainer className="HeaderContainer bg-white px-6 w-full fixed top-0 left-0 z-10 border-b-[4px] border-solid border-black border-opacity-[0.08] ">
        <HeaderContent className="HeaderContent flex items-center mx-auto my-1 min-h-full max-w-6xl">
          <Logo className="Logo mr-2 text-[0]">
            <a href="/home">
              <img src="/images/home-logo.svg" alt="" />
            </a>
          </Logo>
          <SearchBox />
          <HeaderNavs />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
export default Header;

const HeaderContainer = styled.div``;
const HeaderContent = styled.div``;
const Logo = styled.span``;

/*
;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;



const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
*/
