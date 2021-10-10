import React, {useState} from "react";

const MovieHero = () => {

    const [movie, setMovie] = useState({
        id: "mov1",
        og_title: "Fast and furious",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi sequi recusandae ex dicta vero amet tempora at, illum nostrum, error consequuntur? Autem a, delectus beatae vero assumenda recusandae optio!",
        backdrop: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
        poster: "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg"
    })

    return (
        <>
            <div>
                {/* {mobile} */}
                <div className="lg:hidden w-full">
                    <img src={movie.backdrop} alt="cover poster" className="m-4 rounded" style={{width: "calc(100% - 2rem)"}}/>
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col  gap-2">
                            <h4>4k rating</h4>
                            <h4>English, Hindi, Tamil, Urdu</h4>
                            <h4>{movie.overview}</h4>
                        </div>
                    </div>

                    <div className="flex justify-around px-4 w-full items-center gap-3 text-xl">
                        <button className="bg-red-500 w-full  py-3 text-white font-semibold rounded-lg">
                            Rent $2
                        </button>

                        <button className="bg-red-500 w-full  py-3 text-white font-semibold rounded-lg">
                            Buy $129
                        </button>
                    </div>
                </div>

                
                {/* {Large Screen} */}
                <div className=" relative hidden w-full lg:block">
                    <div className="absolute z-10 w-full h-full" style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}>

                    </div>

                    <div className="absolute z-30 flex items-center justify-center top-20 left-20 ">
                        <div className="w-64 h-64">
                            <img src={movie.poster} alt="poster" className="rounded-lg" />
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default MovieHero;