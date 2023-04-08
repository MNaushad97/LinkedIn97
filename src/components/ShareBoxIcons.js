import styled from "styled-components";

function ShareBoxIcons({ icon, iconText }) {
  return (
    <>
      <IconTextWrapper>
        <button>
          <img src={`/images/${icon}.svg`} alt="" />
          <button className="flex items-center text-sm border-none font-semibold min-h-[12px] bg-transparent outline-none text-black/60">
            {iconText}
          </button>
        </button>
      </IconTextWrapper>
    </>
  );
}

export default ShareBoxIcons;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
`;

const IconTextWrapper = styled(CommonCard)`
  button {
    img {
      margin: 0 8px 0 -2px;
    }
  }
`;
