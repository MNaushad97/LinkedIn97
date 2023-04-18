import styled from "styled-components";
import Header from "./Header";
import InCenter from "./InCenter";
import Leftside from "./LeftSide";
import RightSide from "./RightSide";

function Home() {
  return (
    <>
      <Header />
      <Container className="py-14 sm:mx-[156px] max-w-full">
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
  /* grid-template-areas: "leftSide inCenter rightSide";
  grid-template-columns:
    var(minmax(0, 225px)) var(minmax(0, auto))
    var(minmax(0, 300px)); */
  /* grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px; */
  // named the components using grid-areas so that above line could arrange them in said manner
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
