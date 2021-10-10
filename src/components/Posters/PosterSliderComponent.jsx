import React from "react";
import Slider from "react-slick";
import Poster from "./PosterComponent";

const PosterSlider = (props) => {

    
    console.log(props.path);

    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="flex flex-col items-start w-full my-2">
                <h3 className={`text-2xl font-bold ${props.isDark} ? text-white : text-gray-700}`}>Recommended Movies</h3>
                <p className="text-sm text-gray-800">
                    List of recommended movies
                </p>
            </div>
            <Slider {...settings}>
                {   props.path.map((image) => (
                    <Poster src={`https://image.tmdb.org/t/p/original/${image.poster_path}`}
                        title={`${image.title}`} />
                ))}
                
            </Slider>
        </>
    );
};

export default PosterSlider;