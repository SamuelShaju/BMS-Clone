import React, { useState, useEffect } from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import EntertainmentCardSlider from "../Entertainment/EntertainmentCardComponent";
import PosterSlider from "../Posters/PosterSliderComponent";
import NavBar from "../NavBar/NavBarComponent";
import axios from "axios";


function Home() {

  const [recomendedMovies, setRecMov] = useState([]);
  const [premiereMovie, setPremMov] = useState([]);
  const [onlineStream, setOnlStm] = useState([]);

  useEffect(() => {
    const reqRecMov = async () =>{
      const getPopMov = await axios.get("/movie/popular");
      setRecMov(getPopMov.data.results);
    }

    reqRecMov();
  },[]);

  useEffect(() => {
    const reqPremMov = async () =>{
      const getPemMov = await axios.get("/movie/top_rated");
      setPremMov(getPemMov.data.results);
    }

    reqPremMov();
  },[]);
  
  useEffect(() => {
    const reqUpcMov = async () =>{
      const getUpcMov = await axios.get("/movie/upcoming");
      setOnlStm(getUpcMov.data.results);
    }

    reqUpcMov();
  },[]);

  console.log(premiereMovie);
  

    return ( 
    <>

      <HeroCarousel />

      <div className=" mx-auto px-0 md:px-4 my-8">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
              The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
      </div>

      <div className="bg-samuel-600 py-5 mx-auto px-0 md:px-4 md:w-full md:mx-auto">
                <PosterSlider isDark={true}
                title = "Recommended"
                path={recomendedMovies} />
      </div>
      
      <div className="py-5 mx-auto px-0 md:px-4 md:w-full md:mx-auto">
                <PosterSlider isDark={false}
                title = "Top Rated"
                path={premiereMovie} />
      </div>

      <div className="bg-samuel-600 py-5 mx-auto px-0 md:px-4 md:w-full md:mx-auto">
                <PosterSlider isDark={false}
                title = "Comming Soon"
                path={onlineStream} />
      </div>
    </>);
  }

export default Home;