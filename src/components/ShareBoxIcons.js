import styled from "styled-components";

function ShareBoxIcons({ icon, iconText }) {
  return (
    <>
      <IconTextWrapper className="flex justify-around mt-4 mb-2">
        <img src={`/images/${icon}.svg`} alt="" />
        <button className="flex items-center text-sm pl-4 border-none font-semibold min-h-[12px] bg-transparent outline-none text-black/60">
          {iconText}
        </button>
      </IconTextWrapper>
    </>
  );
}

export default ShareBoxIcons;

const IconTextWrapper = styled.div``;
