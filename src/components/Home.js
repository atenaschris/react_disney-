import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCallback } from "react";

import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];
  const fetchMoviesData = useCallback(async ()=>{
    const querySnapshot = await getDocs(collection(db,"movies"));
    querySnapshot.forEach((doc)=>{
      
      switch (doc.data().type) {
        case "recommend":
          console.log("Recommended movies");
          recommends = [...recommends, {id:doc.id,...doc.data()}];
          break;
        case "new":
          console.log("news");
          newDisneys = [...newDisneys,{id:doc.id,...doc.data()}];
          break;
        case "original":
          console.log("originals");
         originals = [...originals,{id:doc.id,...doc.data()}];
          break;
        case "trending":
          console.log("trending");
        trendings = [...trendings,{id:doc.id,...doc.data()}];
          break;
      }

      console.log(recommends);
      console.log(newDisneys);
      console.log(originals);
      console.log(trendings);

      helperSetMoviesFunction(recommends,newDisneys,originals,trendings)

    })
  },[])

  const helperSetMoviesFunction = (recommends,newDisneys,originals,trendings) =>{
    
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings
      }));

  }

  useEffect(() => {
   
    fetchMoviesData();

  }, [userName,fetchMoviesData]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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
