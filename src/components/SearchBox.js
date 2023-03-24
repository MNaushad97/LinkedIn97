import styled from "styled-components";

function SearchBox() {
  return (
    <>
      <SearchSection className="opacity-100 relative flex-grow">
        <div className="max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="border-none bg-[#eef3f8] rounded-md text-black/90 w-56 pr-2 pl-10 leading-[1.75] font-normal text-sm border-[#dce6f1] align-text-top h-9 "
          />
        </div>
        <SearchIcon className="SearchIcon flex justify-center items-center absolute top-3 left-0.5  m-0 w-10 border-l-2 border-b-2 z-10 ">
          <img src="/images/search-icon.svg" alt="" />
        </SearchIcon>
      </SearchSection>
    </>
  );
}
export default SearchBox;

const SearchSection = styled.div``;
const SearchIcon = styled.div``;
