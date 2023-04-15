import styled from "styled-components";

function ShareBoxIcons({ icon, iconText }) {
  return (
    <>
      <IconTextWrapper className="flex justify-around py-3 px-2 rounded-md cursor-not-allowed hover:bg-gray-200/70">
        <img src={`/images/${icon}.svg`} alt="" />
        <button className=" flex items-center text-sm pl-2.5 cursor-not-allowed border-none font-semibold min-h-[12px] bg-transparent outline-none text-black/60">
          {iconText}
        </button>
      </IconTextWrapper>
    </>
  );
}

export default ShareBoxIcons;

const IconTextWrapper = styled.div``;
