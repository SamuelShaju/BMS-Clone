import React from "react";
import Home from "./components/HomePage/HomePageComponent";
import DefaultHOC from "./HOC/DefaultHOC";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import MoviePage from "./components/HomePage/MoviePage";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Home} />
      <DefaultHOC path="/Movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
