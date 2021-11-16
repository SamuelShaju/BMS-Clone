import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieHero from "../MovieHero/MovieHeroComponent";
import MovieNavBar from "../NavBar/MovieNavBarComponent";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../Cast/CastComponent";
import PosterSlider from "../Posters/PosterSliderComponent";
import { MovieContext } from "../../Context/MovieContext";
import { useParams } from "react-router";

const MoviePage = () => {

    const {movie, setMovie} = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const {id} = useParams();

    const [recomendedMovies, setRecMov] = useState([]);
    const [premiereMovie, setPremMov] = useState([]);

    useEffect(() => {
        const reqRecMov = async () =>{
            const getRecMov = await axios.get(`/movie/${id}/recommendations`);
            setRecMov(getRecMov.data.results);
            console.log(getRecMov.data.results);
        }

        reqRecMov();
    },[id]);

    useEffect(() => {
        const reqPremMov = async () =>{
            const getPemMov = await axios.get(`/movie/${id}/similar`);
            setPremMov(getPemMov.data.results);
        }

        reqPremMov();
    },[id]);

    useEffect(() => {
        const reqCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }

        reqCast();
    },[id]);



    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero/>

            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col item-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">
                        About the movie
                    </h1>
                    <p>
                        {movie.overview}
                    </p>
                </div>

                <div classname="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl">Applicable offers</h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-4 border-yellow-400 border-dashed rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-fill h-fill" />
                            </div>
                            <div className="flex flex-col item-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all RuPay card*
                                    on BookMyShow Stream.
                                </p>
                            </div>

                        </div>
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-4 border-yellow-400 border-dashed rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-fill h-fill" />
                            </div>
                            <div className="flex flex-col item-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    ApplePay Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 30 on all ApplePay card*
                                    on BookMyShow Stream.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div classname="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast and Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => (
                             <Cast image = {`https://image.tmdb.org/t/p/original${castData.profile_path}`} castName={castData.original_name} role={castData.character} />
                        ))}
                    </Slider>
                </div>


                <div classname="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast and Crew
                    </h2>
                    <PosterSlider config={settings} path={recomendedMovies} isDark={false} title="Recommended"/>
                </div>


                <div classname="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        BMS XCLUSIVE
                    </h2>
                    <PosterSlider config={settings} path={premiereMovie} isDark={false} title="Recommended"/>
                </div>

            </div>




        </>
    );
}


export default MoviePage;