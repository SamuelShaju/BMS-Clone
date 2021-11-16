import React from "react";
import Home from "./components/HomePage/HomePageComponent";
import DefaultHOC from "./HOC/DefaultHOC";
import axios from "axios";
import MovieHOC from "./HOC/MovieHOC";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import MoviePage from "./components/HomePage/MoviePage";
import Plays from "./components/HomePage/PlaysPage";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Home} />
      <MovieHOC path="/Movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/Plays" exact component={Plays}/>
    </>
  );
}

export default App;
