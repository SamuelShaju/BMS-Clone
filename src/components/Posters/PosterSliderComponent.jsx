import React from "react";
import Slider from "react-slick";
import Poster from "./PosterComponent";

const PosterSlider = (props) => {

    const settings = {
        infinite: true,
        autoplay: true,
        mobileFirst: true,
        InitialSlide: 0,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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

    const {isDark, poster_path, title, config} = props;
    
    const currentSettings = config ? config : settings;

    return (
        <>
            <div className="px-10 flex flex-col items-start w-full my-2">
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    List of {props.title} movies
                </p>
            </div>
            <Slider {...currentSettings} className="w-11/12 m-auto">
                {   props.path.map((image) => (
                    <Poster src={`https://image.tmdb.org/t/p/original/${image.poster_path}`}
                        title={`${image.title}`}
                        id={`${image.id}`} />
                ))}
                
            </Slider>
        </>
    );
};

export default PosterSlider;