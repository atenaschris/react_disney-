import { useParams } from "react-router";
import styled from "styled-components";

import { useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

import { selectSingleMovie } from "../features/movie/movieSlice";
import { getSingleMovie } from "../features/movie/movieSlice";

const DetailPage = () => {
  const params = useParams();

  const { MovieId } = params;

  const singleMovie = useSelector(selectSingleMovie);

  console.log(singleMovie);

  const dispatch = useDispatch();

  const fetchSingleMovie = useCallback(async () => {
    try {
      const docRef = doc(db, "movies", `${MovieId}`);

      console.log(docRef);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        helperSetSingleMovieFunction(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      alert(err.message);
    }
  }, []);
  

  const helperSetSingleMovieFunction = (singleMovie) => {
    dispatch(
      getSingleMovie({
        singleMovie,
      })
    );
  };

  useEffect(() => {
    console.log("running");
    fetchSingleMovie();
  }, [MovieId, fetchSingleMovie]);

  return (
    <Container>
      <Background img={singleMovie.backgroundImg}>
        <img src={singleMovie.backgroundImg} alt={singleMovie.title} />
      </Background>
      <ImageTitle>
        <img src={singleMovie.titleImg} alt={singleMovie.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="playbutton" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="Play Icon" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="Group Icon" />
          </GroupWatch>
        </Controls>
        <SubTitle>Subtitle</SubTitle>
        <Description>{singleMovie.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
     width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  margin: 0 auto;

  img {
    width: 35vw;
    max-width: 600px;
    min-width: 200px;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  padding: 0px 24px;
  margin: 0px 25px 0px 0px;
  height: 56px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  transition: all 0.3s ease;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 12px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(8px, 0px);
      width: 16px;
    }

    &:nth-child(2) {
      height: 2px;
      width: 17px;
      transform: translate(-8px) rotate(90deg);
    }
  }
`;
const GroupWatch = styled(AddList)``;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default DetailPage;
