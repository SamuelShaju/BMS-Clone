import React, {useState, useContext} from "react";
import { MovieContext } from "../../Context/MovieContext";
import PaymentModal from "../PaymentModal/PaymentComponent";

const MovieHero = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const rent = () => {
        setIsOpen(true);
        setPrice(149);
    }
    const buy = () => {
        setIsOpen(true);
        setPrice(599);
    }

    const {movie, setMovie} = useContext(MovieContext);

    const genre = movie.genres?.map(({name}) => name).join(', ');

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}></PaymentModal>
            <div>
                {/* {mobile} */}
                <div className="lg:hidden w-full">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="cover poster" className="m-4 rounded" style={{width: "calc(100% - 2rem)"}}/>
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col  gap-2">
                            <h4>4k rating</h4>
                            <h4>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m • {genre}</h4>
                            <h4>{movie.tagline}</h4>
                        </div>
                    </div>

                    <div className="flex justify-around px-4 w-full items-center gap-3 text-sm">
                        <button className="bg-red-500 py-3 text-white font-semibold rounded-lg">
                            Rent $2
                        </button>

                        <button className="bg-red-500 py-3 text-white font-semibold rounded-lg">
                            Buy $129
                        </button>
                    </div>
                </div>

                
                {/* {Large Screen} */}
                <div className=" relative hidden w-full lg:block">
                    <div className="absolute z-10 w-full h-full" style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 5.3%, rgba(34, 34, 34, 0) 50%, rgb(34, 34, 34) 100%)",
                        }}>

                    </div>

                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="backdrop poster"
                        className="w-full h-full"
                    />

                    <div className="absolute z-30 flex w-full items-center gap-16 top-40 left-20 ">
                        <div className="w-64 h64">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" className="rounded-lg" />
                        </div>

                        <div className="flex flex-col w-full gap-8 text-left">
                            <h1 className="text-white text-5xl font-bold overflow-hidden">
                                {movie.original_title}
                            </h1>

                            <div className="flex flex-col text-samuel-100">
                                <h4>4k ratings</h4>
                                <h4>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m • {genre}</h4>
                                <h4>UA • 2 Sep, 2021</h4>

                            </div>

                            <div className="flex justify-items-start px-0 w-full items-center gap-3 text-xl">
                                <button className="bg-red-500 w-1/4  py-3 text-white font-semibold rounded-lg" onClick={rent}>
                                    Rent Rs. 149
                                </button>

                                <button className="bg-red-500 w-1/4 py-3 text-white font-semibold rounded-lg" onClick={buy}>
                                    Buy Rs. 599
                                </button>
                            </div>
                        </div>

                    </div>

                    
                    
                </div>
                



            </div>
        </>
    );
}

export default MovieHero;