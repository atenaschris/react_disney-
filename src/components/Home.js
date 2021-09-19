import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from './Viewers';

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers/>
    </Container>
  );
};

const Container = styled.main`
  color: white;
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  top: 72px;

  &:after {
    content: "";
    position: absolute;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    inset: 0px;
    z-index: -1;
  }
`;
export default Home;
