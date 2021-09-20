import styled from "styled-components";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = () => {
  const originalMovies = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {originalMovies &&
          originalMovies.map((movie,i) => (
            <Wrap key={i}>
              <Link to={'/detail/' + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px 0;
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    opacity: 1;
    z-index: 1;
    transition: transform 250ms ease;
    transform: scale(1);
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    transform-origin: left center;
    border-color: rgba(249, 249, 249, 0.8);

    img {
      transform: scale(1.1);
    }
  }
`;

export default Originals;
