import styled from "styled-components";

function InCenter() {
  return (
    <>
      <Container className="bg-pink-200 sm:col-span-9 lg:col-span-6 ">
        share
      </Container>
    </>
  );
}

export default InCenter;

const Container = styled.div`
  //grid-area: inCenter;
`;
