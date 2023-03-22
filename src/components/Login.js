import styled from "styled-components";

function Login() {
  return (
    <>
      <Container>
        <Nav>
          <a href="/">
            <img src="images/login-logo.svg" alt="" />
          </a>
          <div>
            <Join>Join now</Join>
            <SignIn>Sign in</SignIn>
          </div>
        </Nav>
      </Container>
    </>
  );
}
export default Login;

const Container = styled.div`
  padding: 0px;
`;
//notice, below we used (.nav)
const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: auto;
  padding: 12px 0 16px; // top l-r bottom
  max-width: 1128px;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px; //tb lr
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none; // as we are styling anchor tag here so no "underLine"
  border-radius: 999px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.7);
  }
`;
const SignIn = styled.a`
  text-align: center;
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
