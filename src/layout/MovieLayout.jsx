import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieNavBar from "../components/NavBar/MovieNavBarComponent";

const MovieLayout = (props) => {
    return (
        <div>
            <MovieNavBar/>
              {props.children}
            <footer>Footer</footer>
        </div>
    );
}

export default MovieLayout