import styled from "styled-components";

function UserInfoSection() {
  return (
    <>
      <UserInfo className="px-3 pt-3 pb-4 break-words">
        <CardBackground className="bg-[url(/images/card-bg.svg)] h-20 -mt-3 -mx-3 mb-0 bg-cover" />
        <a>
          <Photo className="bg-[url(/images/default-profileImg.svg)] -mt-9 mx-auto mb-3 border-2 border-solid border-white rounded-[50%] w-[5rem] h-[5rem] lg:w-28 lg:h-28 box-border bg-clip-content" />
          <Link className="text-base leading-6 font-semibold text-black/90">
            Welcome There!
          </Link>
        </a>
        <a>
          <AddPhotoText className="text-[#0a66c2] mt-1 text-xs leading-6 font-normal">
            Add a photo
          </AddPhotoText>
        </a>
      </UserInfo>
    </>
  );
}

export default UserInfoSection;
const CardBackground = styled.div``;

const Photo = styled.div``;

const AddPhotoText = styled.div``;

const Link = styled.div``;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  word-break: break-word;
`;
