import React from "react";
// import { Link } from "react-router-dom";

const Poster = (props) => {

    return (
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
                <img
                    src={`${props.src}`}
                    alt="poster"
                    className="w-full h-full rounded-md"
                />
            </div>
            <h3 className="lg:text-lg font-bold text-gray-700 sm:text-sm sm:break-normal">
                {`${props.title}`}
            </h3>
            {/* <p className="text-sm w-20 text-gray-700 sm:break-words ">
                Action/Adventure/Crime/Thriller
            </p> */}
        </div>
    );
};

export default Poster;