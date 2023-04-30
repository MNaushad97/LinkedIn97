import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setUserData } from "../features/user/userSlice";
import { auth, provider } from "../firebase/firebase";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, []);

  function handleAuthentication() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const setUser = (user) => {
    dispatch(
      setUserData({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
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
        <Section>
          <Hero>
            <h1>Welcome to your professional community</h1>
            <img src="/images/login-doodle.svg" alt="" />
          </Hero>
          <Form>
            <Google onClick={handleAuthentication}>
              <img src="/images/google.svg" alt="" />
              Sign in with Google
            </Google>
          </Form>
        </Section>
      </Container>
    </>
  );
}
export default Login;

//used styled-component as its easier to define elements with named component
//with tailwind we had to provide className or Id to identify the elements

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
  padding: 12px 12px 16px; // top l-r bottom

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px; //tb lr
      width: 25%;
      height: auto;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none; // as we are styling anchor tag here so no "underLine"
  border-radius: 28px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;
const SignIn = styled.a`
  text-align: center;
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  right: 12px;
  padding: 10px 24px;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  align-content: start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  min-height: 700px;
  margin: auto;
  padding: 40px 0 138px;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    color: #2977c9;
    font-size: 56px;
    font-weight: 500;
    line-height: 70px;
    padding-bottom: 0;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size: 20px;
      line-height: 2;
    }
  }
  img {
    z-index: 0;
    position: absolute;
    bottom: -2px;
    right: -150px;
    width: 700px;
    height: 670px;
    @media (max-width: 768px) {
      top: 230px;
      width: auto;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  z-index: 10;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  background-color: #fff;
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.3);
    color: rgba(0, 0, 0, 0.75);
  }
`;
