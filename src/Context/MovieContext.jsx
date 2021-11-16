import React, {useState} from "react";


export const MovieContext = React.createContext();


const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
        id: 0,
        og_title: "",
        overview: "",
        backdrop: "",
        poster: "",

    });

    return (
        <MovieContext.Provider value={{movie, setMovie}}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;