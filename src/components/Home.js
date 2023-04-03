import styled from "styled-components";
import Header from "./Header";
import InCenter from "./InCenter";
import Leftside from "./LeftSide";
import RightSide from "./RightSide";

function Home() {
  return (
    <>
      <Header />
      <Container className="pt-14 sm:mx-[156px] max-w-full ">
        <LayoutOfHomePage className="grid gap-y-6 gap-x-6 mt-1.5 pt-6 grid-cols-12">
          <Leftside />
          <InCenter />
          <RightSide />
        </LayoutOfHomePage>
      </Container>
    </>
  );
}
export default Home;
const Container = styled.div``;

const LayoutOfHomePage = styled.div`
  //grid-template-areas: "leftSide inCenter rightSide";
  // named the components using grid-areas so that above line could arrange them in said manner
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
