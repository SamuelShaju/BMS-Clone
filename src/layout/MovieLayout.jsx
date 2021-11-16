import React, {useEffect, useContext} from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieNavBar from "../components/NavBar/MovieNavBarComponent";
import { useParams } from "react-router";

import { MovieContext } from "../Context/MovieContext";

const MovieLayout = (props) => {

    const {id} = useParams();
    const {movie, setMovie} = useContext(MovieContext);

    useEffect(() => {
        const reqMovie = async () => {
            const MovieData = await axios.get(`/movie/${id}`);
            setMovie(MovieData.data);
        };
        reqMovie();
    }, [])

    return (
        <div>
            <MovieNavBar/>
              {props.children}
            <footer>Footer</footer>
        </div>
    );
}

export default MovieLayout