import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price od Disney+
            and the Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt=""></CTALogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

const CTA = styled.div`
  margin: 0 auto 2vw auto;
  max-width: 650px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-out;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.4s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
    border: 1px solid #f9f9f9;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
      inset 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
      inset 5px 5px 15px 5px rgba(0, 0, 0, 0);
    text-shadow: 3px 5px 2px #474747;
  }

 
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 13px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
`;

export default Login;
