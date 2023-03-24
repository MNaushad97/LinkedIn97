function Header() {
  return (
    <>
      <div className="Container  bg-white px-6 w-full fixed top-0 left-0 z-10 border-b-[4px] border-solid border-black border-opacity-[0.08] ">
        <div className="Content flex items-center mx-auto min-h-full max-w-6xl">
          <a href="/home" className="Logo mr-2 text-[0] ">
            <img src="/images/home-logo.svg" alt="" />
          </a>
          <div className="SearchSection opacity-100 relative flex-grow">
            <div className="max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="border-none bg-[#eef3f8] rounded-sm text-black/90 w-56 pr-2 pl-10 leading-[1.75] font-normal text-sm border-[#dce6f1] align-text-top h-9 "
              />
            </div>
            <div className="SearchIcon">
              <img src="/images/search-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

/*
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

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
