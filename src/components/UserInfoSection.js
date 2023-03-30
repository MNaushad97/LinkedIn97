import styled from "styled-components";

function UserInfoSection() {
  return (
    <>
      <CardBackground className="bg-[url(/images/card-bg.svg)] h-20 -mt-3 -mx-3 mb-0 bg-cover " />
      <a>
        <Photo className="bg-[url(/images/default-profileImg.svg)] -mt-9 mx-auto mb-3 border-2 border-solid border-white rounded-[50%] w-28 h-28 box-border bg-clip-content" />
        <Link className="text-base leading-6 font-semibold text-black/90">
          Welcome There!
        </Link>
      </a>
      <a>
        <AddPhotoText className="text-[#0a66c2] mt-1 text-xs leading-6 font-normal">
          Add a photo
        </AddPhotoText>
      </a>
    </>
  );
}

export default UserInfoSection;
const CardBackground = styled.div``;

const Photo = styled.div``;

const AddPhotoText = styled.div``;

const Link = styled.div``;