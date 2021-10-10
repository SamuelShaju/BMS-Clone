import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./ArrowComponent";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const HeroCarousel = () =>{

    // const [images, setImages] = useState([
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630045372422_bellbottomunderthestarspvrdriveinexperience_webshowcase_1240x300.jpg",
    // ]);

    const [images, setImages] = useState([]);

    useEffect(() => {
        const get = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results)
        }

        get();
    },[])

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((images) => (
                        <div className="w-full h-56 md:h-80 py-3 ">
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="testing"
                                className="w-full h-full  object-center"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((images) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="testing"
                                className="w-full h-full rounded-md object-center"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousel;